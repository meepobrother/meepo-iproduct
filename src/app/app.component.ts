import { Component, OnInit, KeyValueDiffers } from '@angular/core';
import { DesignService } from 'meepo-idesign';
import { PreviewComponents } from 'meepo-common-components';
import { ReactComponent } from 'ng-react-component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends ReactComponent<any, any> implements OnInit {
  components: any[] = [];
  constructor(
    private design: DesignService,
    private differs: KeyValueDiffers,
    private http: HttpClient
  ) {
    super(differs);
  }

  ngOnInit() {
    this.http.get('');
    const historys = this.design.getHistory();
    let history: any;
    if (historys.length > 0) {
      history = historys[0];
      const components = history.data;
      components.map(res => {
        res.preview = this.getComponentByName(res.name);
      });
      this.components = components;
    }
  }

  onStateChange() { }
  onPropsChange() { }

  getComponentByName(name: string) {
    let com: any;
    for (const key in PreviewComponents) {
      const res = PreviewComponents[key];
      if (res.name === name) {
        com = res;
      }
    }
    return com;
  }
}
