import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from "./videos";
import {VideoplayerComponent} from "./videoplayer.component";
import {PlaylistComponent} from "./playlist.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent, VideoplayerComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos: Array<Video>;
    video: Video;
    constructor(){
        this.videos = [
            new Video(1,"This Town","ic1l36GrNOU","Niall Horan"),
            new Video(2,"Thrift Shop","QK8mJJJvaes","Macklemore"),
            new Video(3,"Sleep on the floor","v4pi1LxuDHc","The Lumineers"),
            new Video(4,"All Falls Down","6RLLOEzdxsM","Alan-Walker"),
            new Video(5,"Galway Girl","87gWaABqGYs","Ed-Sheeran")
        ];
        this.video = this.videos[0];
    }

    shlokList(): void{
        this.videos = [
            new Video(1,"This Town","ic1l36GrNOU","Niall Horan"),
            new Video(2,"Thrift Shop","QK8mJJJvaes","Macklemore"),
            new Video(3,"Sleep on the floor","v4pi1LxuDHc","The Lumineers"),
            new Video(4,"All Falls Down","6RLLOEzdxsM","Alan-Walker"),
            new Video(5,"Galway Girl","87gWaABqGYs","Ed-Sheeran")
        ];
    }


    momList(): void{
        this.videos = [
            new Video(1,"Rockabye","papuvlVeZg8","Clean-Bandit"),
            new Video(2,"Swag se swagat","xmU0s2QtaEY","Bhai"),
            new Video(3,"Wakhra Swag","iMdH_G4N9nY","Baadsha"),
            new Video(4,"Badrinath Ki Dulhania","1YBl3Zbt80A","Varun"),
            new Video(5,"Nikke Nikke Shots","eWjGh61Gacg","Baadshah")
        ];
    }

    onVideoSelected(video: Video) {
        this.video = video;
    }
}