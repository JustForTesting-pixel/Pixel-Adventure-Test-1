

const scriptsInEvents = {

	async OlayKağıDı1_Event5_Act1(runtime, localVars)
	{
		const oyuncu = runtime.objects.Oyuncu.getFirstInstance();
		if (!oyuncu) return;
		
		const platform = oyuncu.behaviors.Platform;
		if (!platform) return;
		
		const klavye = runtime.keyboard;
		
		if (klavye.isKeyDown("KeyA")) {
		    platform.simulateControl("left");
		} else if (klavye.isKeyDown("KeyD")) {
		    platform.simulateControl("right");
		}
		
		if (klavye.isKeyDown("KeyW")) {
		    platform.simulateControl("jump");
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
