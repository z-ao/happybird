import { ResourceLoader } from './js/base/ResourceLoader.js';
import { BackGround } from './js/runtime/BackGround.js';
import { Land } from './js/runtime/Land.js';
import { Birds } from './js/player/Birds.js';
import { StartButtom } from './js/player/StartButtom.js';
import { Score } from './js/player/Score.js';
import { DataStore } from './js/base/DataStore.js';
import { Director } from './js/Director.js';

export class Main {
	constructor() {
		this.canvas = document.getElementById('game_canvas');
		this.ctx = this.canvas.getContext('2d');
		this.dataStore = DataStore.getInstance();
		this.director = Director.getInstance();
		const loader = ResourceLoader.create();
		loader.onLoaded((map) => this.onResourceFirstLoaded(map));
	}

	onResourceFirstLoaded(map) {
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
		this.canvas.addEventListener('touchstart', e => {
			e.preventDefault();
			if (this.director.isGameOver) {
				this.init();
			} else {
				this.director.birdsEvent();
			}
		})
	}
}