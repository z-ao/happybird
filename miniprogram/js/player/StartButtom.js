//按钮类
import { Sprite } from '../base/Sprite.js';
import { DataStore } from '../base/DataStore.js';

export class StartButtom extends Sprite{
	constructor() {
		const image = Sprite.getImage('startButton');
		super(image,
			0, 0, image.width, image.height,
			(DataStore.getInstance().canvas.width / 2 - image.width / 2), (DataStore.getInstance().canvas.height / 2 - image.height),
			image.width, image.height)
	}
}