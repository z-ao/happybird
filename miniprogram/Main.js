import { ResourceLoader } from './js/base/ResourceLoader';
import { BackGround } from './js/runtime/BackGround';
import { Land } from './js/runtime/Land';
import { Birds } from './js/player/Birds';
import { StartButtom } from './js/player/StartButtom';
import { Score } from './js/player/Score';
import { DataStore } from './js/base/DataStore';
import { Director } from './js/Director';

export class Main {
	constructor() {
        this.canvas = wx.createCanvas();
		this.ctx = this.canvas.getContext('2d');
		this.dataStore = DataStore.getInstance();
		this.director = Director.getInstance();
		const loader = ResourceLoader.create();
		loader.onLoaded((map) => this.onResourceFirstLoaded(map));
	}

	onResourceFirstLoaded(map) {
		this.dataStore.canvas = this.canvas;
		this.dataStore.ctx = this.ctx;
		this.dataStore.res = map;
		this.init();
	}

	init() {

		this.director.isGameOver = false;

		this.dataStore.put('background', BackGround)
					.put('land', Land)
					.put('pencils', [])
					.put('birds', Birds)
					.put('startButtom', StartButtom)
					.put('score', Score);

		this.regiserEvent();
		this.director.createPencil();
		this.director.run();
	}

	regiserEvent() {
		wx.onTouchStart(() => {
			if (this.director.isGameOver) {
				this.init();
			} else {
				this.director.birdsEvent();
			}
		})
	}
}