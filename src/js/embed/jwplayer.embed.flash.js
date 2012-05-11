/**
 * Flash mode embedder the JW Player
 * @author Zach
 * @modified Pablo
 * @version 6.0
 */
(function(jwplayer) {
	var utils = jwplayer.utils;

	jwplayer.embed.flash = function(_container, _player, _options, _loader, _api) {
		function appendAttribute(object, name, value) {
			var param = document.createElement('param');
			param.setAttribute('name', name);
			param.setAttribute('value', value);
			object.appendChild(param);
		};
		
		function _resizePlugin(plugin, div, onready) {
			return function(evt) {
				if (onready) {
					document.getElementById(_api.id+"_wrapper").appendChild(div);
				}
				var display = document.getElementById(_api.id).getPluginConfig("display");
				plugin.resize(display.width, display.height);
				var style = {
					left: display.x,
					top: display.y
				}
				utils.css(div, style);
			}
		}
		
		
		function parseComponents(componentBlock) {
			if (!componentBlock) {
				return {};
			}
			
			var flat = {};
			
			for (var component in componentBlock) {
				var componentConfig = componentBlock[component];
				for (var param in componentConfig) {
					flat[component + '.' + param] = componentConfig[param];
				}
			}
			
			return flat;
		};
		
		function parseConfigBlock(options, blockName) {
			if (options[blockName]) {
				var components = options[blockName];
				for (var name in components) {
					var component = components[name];
					if (typeof component == "string") {
						// i.e. controlbar="over"
						if (!options[name]) {
							options[name] = component;
						}
					} else {
						// i.e. controlbar.position="over"
						for (var option in component) {
							if (!options[name + '.' + option]) {
								options[name + '.' + option] = component[option];
							}
						}
					}
				}
				delete options[blockName];
			}
		};
		
		function parsePlugins(pluginBlock) {
			if (!pluginBlock) {
				return {};
			}
			
			var flat = {}, pluginKeys = [];
			
			for (var plugin in pluginBlock) {
				var pluginName = utils.getPluginName(plugin);
				var pluginConfig = pluginBlock[plugin];
				pluginKeys.push(plugin);
				for (var param in pluginConfig) {
					flat[pluginName + '.' + param] = pluginConfig[param];
				}
			}
			flat.plugins = pluginKeys.join(',');
			return flat;
		};
		
		function jsonToFlashvars(json) {
//			var flashvars = json.netstreambasepath ? '' : 'netstreambasepath=' + encodeURIComponent(window.location.href.split("#")[0]) + '&';
			var flashvars = '';// = encodeURIComponent(window.location.href.split("#")[0]) + '&';
			for (var key in json) {
				if (typeof(json[key]) == "object") {
					flashvars += key + '=' + encodeURIComponent("[[JSON]]"+utils.jsonToString(json[key])) + '&';
				} else {
					flashvars += key + '=' + encodeURIComponent(json[key]) + '&';
				}
			}
			return flashvars.substring(0, flashvars.length - 1);
		};
		
		this.embed = function() {		
			// Make sure we're passing the correct ID into Flash for Linux API support
			_options.id = _api.id;
			
			var _wrapper;
			
			var params = utils.extend({}, _options);
			
			var width = params.width;	
			var height = params.height;
			
			// Hack for when adding / removing happens too quickly
			if (_container.id + "_wrapper" == _container.parentNode.id) {
				_wrapper = document.getElementById(_container.id + "_wrapper");
			} else {
				_wrapper = document.createElement("div");
				_wrapper.id = _container.id + "_wrapper";
				utils.wrap(_container, _wrapper);
				utils.css('#'+_wrapper.id, {
					position: "relative",
					width: width,
					height: height
				});
			}
			
			var flashPlugins = _loader.setupPlugins(_api, params, _resizePlugin);
			
			if (flashPlugins.length > 0) {
				utils.extend(params, parsePlugins(flashPlugins.plugins));
			} else {
				delete params.plugins;
			}
			
			
			var toDelete = ["height", "width", "modes", "events", "primary", "base", "fallback"];
				
			for (var i = 0; i < toDelete.length; i++) {
				delete params[toDelete[i]];
			}
			
			var wmode = "opaque";
			if (params.wmode) {
				wmode = params.wmode;
			}
			
			parseConfigBlock(params, 'components');
			parseConfigBlock(params, 'providers');
			
			// Hack for the dock
			if (typeof params["dock.position"] != "undefined"){
				if (params["dock.position"].toString().toLowerCase() == "false") {
					params["dock"] = params["dock.position"];
					delete params["dock.position"];					
				}
			}
			
			// If we've set any cookies in HTML5 mode, bring them into flash
			var cookies = utils.getCookies();
			for (var cookie in cookies) {
				if (typeof(params[cookie])=="undefined") {
					params[cookie] = cookies[cookie];
				}
			}
			
			var bgcolor = "#000000",
				flashPlayer,
				flashvars = jsonToFlashvars(params);
			
			if (utils.isIE()) {
				var html = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ' +
				'bgcolor="' +
				bgcolor +
				'" width="100%" height="100%" ' +
				'id="' +
				_container.id +
				'" name="' +
				_container.id +
				'" tabindex=0"' +
				'">';
				html += '<param name="movie" value="' + _player.src + '">';
				html += '<param name="allowfullscreen" value="true">';
				html += '<param name="allowscriptaccess" value="always">';
				html += '<param name="seamlesstabbing" value="true">';
				html += '<param name="wmode" value="' + wmode + '">';
				html += '<param name="flashvars" value="' +
				flashvars +
				'">';
				html += '</object>';

				utils.setOuterHTML(_container, html);
								
				flashPlayer = document.getElementById(_container.id);
			} else {
				var obj = document.createElement('object');
				obj.setAttribute('type', 'application/x-shockwave-flash');
				obj.setAttribute('data', _player.src);
				obj.setAttribute('width', "100%");
				obj.setAttribute('height', "100%");
				obj.setAttribute('bgcolor', '#000000');
				obj.setAttribute('id', _container.id);
				obj.setAttribute('name', _container.id);
				obj.setAttribute('tabindex', 0);
				appendAttribute(obj, 'allowfullscreen', 'true');
				appendAttribute(obj, 'allowscriptaccess', 'always');
				appendAttribute(obj, 'seamlesstabbing', 'true');
				appendAttribute(obj, 'wmode', wmode);
				appendAttribute(obj, 'flashvars', flashvars);
				_container.parentNode.replaceChild(obj, _container);
				flashPlayer = obj;
			}
			
			_api.container = flashPlayer;
			_api.setPlayer(flashPlayer, "flash");
		}
		/**
		 * Detects whether Flash supports this configuration
		 */
		this.supportsConfig = function() {
			if (utils.hasFlash()) {
				if (_options) {
					try {
						var item = _options.playlist[0],
							sources = item.sources;
						
						if (typeof sources == "undefined") {
							return true;
						} else {
							for (var i = 0; i < sources.length; i++) {
								if (sources[i].file && _flashCanPlay(sources[i].file, item.type)) {
									return true;
								}
							}
						}
					} catch (e) {
						return false;
					}
				} else {
					return true;
				}
			}
			return false;
		}
		
		/**
		 * Determines if a Flash can play a particular file, based on its extension
		 */
		function _flashCanPlay(file, type) {
			var types = ["mp4", "flv", "aac", "mp3", "hls", "rtmp", "youtube"];
			// Type is set, and is not one of the above types; assume a loaded provider and play in flash
			if (type && (types.toString().indexOf(type) < 0) ) {
				return true;
			}
			
			var extension = utils.extension(file);
			
			if (!type) type = extension;
			
			// If there is no extension, use Flash
			if (!extension) {
				return true;
			}
			
			// Extension is in the extension map, but not supported by Flash - fail
			if (utils.exists(utils.extensionmap[extension]) &&
					!utils.exists(utils.extensionmap[extension].flash)) {
				return false;
			}
			return true;
		};
	};
	
})(jwplayer);
