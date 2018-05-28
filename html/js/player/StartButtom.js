//按钮类
import { Sprite } from '../base/Sprite.js';

export class StartButtom extends Sprite{
	constructor() {
		const image = Sprite.getImage('startButton');
		super(image,
			0, 0, image.width, image.height,
			(window.innerWidth / 2 - image.width / 2), (window.innerHeight / 2 - image.height),
			image.width, image.height)
	}
}