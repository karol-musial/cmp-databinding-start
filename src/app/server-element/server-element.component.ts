import {AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit, AfterViewInit {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    // console.log('Text Content: ' + this.header.nativeElement.textContent);
    // console.log('The content which is saved by the other component: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log('The content which is saved by the other component: ' + this.paragraph.nativeElement.textContent);
  }

}
