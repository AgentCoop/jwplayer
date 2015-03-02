package com.longtailvideo.jwplayer.player {
import com.longtailvideo.jwplayer.utils.SimpleEvents;

import flash.external.ExternalInterface;

public class SwfEventRouter {

    /**
     * After ExternalInterface.available
     * Add a single callback for all messages sent from the browser
     */

    static private var _initialized:Boolean;

    static public function get available():Boolean {
        if (ExternalInterface.available) {
            if (!_initialized) {
                // ExternalInterface.marshallExceptions = true;
                ExternalInterface.addCallback('__externalCall', _externalJsEvent);
                _initialized = true;
            }
            return true;
        }
        return false;
    }

    /**
     * Use SimpleEvents for event handling from JS
     * This way the interface looks the same in AS3 as in JavaScript
     * Any instance in the Flash app can add and remove callbacks,
     * without additional methods added to the swf element
     */

    static private var _jsEvents:SimpleEvents = new SimpleEvents();

    static private function _externalJsEvent(name:String, json:String = null):void {
        var args:Array = null;
        if (json) {
            args = JSON.parse(json) as Array;
        }
        trace('externalJsEvent', name, json, args);
        if (args && args.length) {
            args.unshift(name);
            _jsEvents.trigger.apply(_jsEvents, args);
        } else {
            _jsEvents.trigger(name);
        }
    }

    static public function on(name:String, callback:Function):SimpleEvents {
        return _jsEvents.on(name, callback);
    }

    static public function off(name:String = null, callback:Function = null):SimpleEvents {
        return _jsEvents.off(name, callback);
    }

    /**
     * SwfEventRouter.triggerJsEvent() will fire a backbone event on the swf element
     * Any instance in the Flash app can fire an event
     */

    static private var _sendScript:XML =
    <script>
    <![CDATA[
        function(id, name, json) {
            var swf = document.getElementById(id);
            if (swf && typeof swf.trigger === 'function') {
                if (json) {
                    var data = JSON.parse(json);
                    swf.trigger(name, data);
                } else {
                    swf.trigger(name);
                }
                return;
            }
            console.log('Unhandled event from "' + id +'":', name, json);
        }
    ]]>
    </script>;

    static public function triggerJsEvent(name:String, data:Object = null):void {
        var id:String = ExternalInterface.objectID;
        if (ExternalInterface.available) {
            var json:String;
            if (data !== null) {
                try {
                    json = JSON.stringify(data);
                } catch(err:Error) {
                    trace('json encoding error', err);
                }
            }
            ExternalInterface.call(_sendScript, id, name, json);
            return;
        }
        trace('Could not dispatch event "' + id + '":', name, json);
    }

    static public function error(code:int, message:String):void {
        SwfEventRouter.triggerJsEvent('error', {
            code: code,
            message: message
        });
    }

}
}
