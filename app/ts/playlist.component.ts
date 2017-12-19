import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Video} from "./videos";

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
})

export class PlaylistComponent{
    @Input() videos: Array<Video>;
    @Output() onSelectedVideo = new EventEmitter<Video>();
    //currentVideo: Video;


    onSelect(video: Video){
        console.log(JSON.stringify(video));
        this.onSelectedVideo.emit(video);
        //this.currentVideo = video;
    }
}