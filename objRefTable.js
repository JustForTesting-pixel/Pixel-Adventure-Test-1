const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.JavaScriptInEvents.OlayKağıDı1_Event5_Act1,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{Oyuncu: 0},
	{ÜzerindeKaydır: 0},
	{CameraTarget: 0},
	{Klavye: 0},
	{Katı: 0},
	{ToprakSol: 0},
	{ToprakOrta: 0},
	{ToprakSağa: 0},
	{YeşilHavaÜstFull: 0},
	{YeşilHavaOrtaSol: 0},
	{YeşilHavaOrtaSağ: 0},
	{Sprite: 0}
];

self.InstanceType = {
	Oyuncu: class extends self.ISpriteInstance {},
	CameraTarget: class extends self.ISpriteInstance {},
	Klavye: class extends self.IInstance {},
	ToprakSol: class extends self.ISpriteInstance {},
	ToprakOrta: class extends self.ISpriteInstance {},
	ToprakSağa: class extends self.ISpriteInstance {},
	YeşilHavaÜstFull: class extends self.ISpriteInstance {},
	YeşilHavaOrtaSol: class extends self.ISpriteInstance {},
	YeşilHavaOrtaSağ: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {}
}