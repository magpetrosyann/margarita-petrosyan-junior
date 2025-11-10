type Constructor<T = {}> = new (...args: any[]) => T;

function Playable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    duration: number = 0;
    currentTime: number = 0;
    isPlaying: boolean = false;

    play(): void {
      if (!this.isPlaying) {
        this.isPlaying = true;
        console.log(`${(this as any).title} is now playing.`);
      }
    }

    pause(): void {
      if (this.isPlaying) {
        this.isPlaying = false;
        console.log(
          `${(this as any).title} is paused at ${this.currentTime}s.`
        );
      }
    }

    stop(): void {
      this.isPlaying = false;
      this.currentTime = 0;
      console.log(`${(this as any).title} has been stopped.`);
    }

    getDuration(): number {
      return this.duration;
    }

    getCurrentTime(): number {
      return this.currentTime;
    }
  };
}

class RegularVideo {
  title: string;
  url: string;

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}

class PremiumVideo {
  title: string;
  url: string;

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}

class LiveVideo {
  title: string;
  url: string;

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}

const PlayableRegularVideo = Playable(RegularVideo);
const PlayablePremiumVideo = Playable(PremiumVideo);
const PlayableLiveVideo = Playable(LiveVideo);

const regular = new PlayableRegularVideo(
  "Nature Documentary",
  "https://example.com/nature"
);
regular.duration = 120;
regular.play();
regular.pause();
regular.stop();
console.log("Duration:", regular.getDuration());
console.log("Current Time:", regular.getCurrentTime());

const premium = new PlayablePremiumVideo(
  "Exclusive Interview",
  "https://example.com/interview"
);
premium.duration = 90;
premium.play();
premium.pause();

const live = new PlayableLiveVideo("Live Concert", "https://example.com/live");
live.play();
