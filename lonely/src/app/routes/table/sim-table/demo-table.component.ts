import {Component, ViewChild} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SimpleTableColumn, SimpleTableComponent} from '@delon/abc';

@Component({
    selector:'demo-table',
    templateUrl:'./demo-table.component.html'
    // template: `<simple-table [data]="url" [total]="total" [columns]="columns"
    //             [resReName]="{list: 'results' }"></simple-table>`
})
export class DemoTableComponent{
    url =' https://randomuser.me/api/?results=3';
    // url:string = "/assets/josn/test.org.data.json";
    // params = { a: 1, b: 2 };
    // mock
    total = 50;
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id.value' },
        { title: '头像', type: 'img', width: '50px', index: 'picture.thumbnail' },
        { title: '邮箱', index: 'email' },
        { title: '电话', index: 'phone' },
        { title: '注册时间', type: 'date', index: 'registered' },
        { title: '按钮',
                buttons:[
                    {
                        text: '编辑',
                        hide:true,
                        click:((row:any)=>{
                            console.log('row::::',row);
                        }).bind(this)
                    }]
        }
    ];




    // @ViewChild('table') table: SimpleTableComponent;
    //
    // // public url:string = "/assets/josn/test.org.data.json";
    // url = `https://randomuser.me/api/?results=3`;
    // public htmlStr:string = "<div>123123123</div>";
    //
    // constructor(public http:HttpClient){}
    //
    // columns:Array<any> = [{
    //     index:'orgNo',
    //     title:'机构编号'
    // },{
    //     index:'orgName',
    //     title:'机构名称'
    // },{
    //     title:'输入html内容',
    //     render:'htmlRender'
    // },{
    //     title:'按钮',
    //     buttons:[
    //         {
    //             // 编辑
    //             text: '编辑',
    //         },
    //
    //     ]}
    // ];
    //
    // onSearch(){
    //     console.log('search....');
    //     this.url = "/assets/json/test2.org.data.json";
    //     // this.table.doSearch();
    // }
    // expandData:any[]=[];
    // onExpandChange(val){
    //     console.log('expandChange:::',val);
    //     // if(!this.expandData[val.index]){
    //     this.http.get('/assets/json/test2.org.data.json').subscribe(res=>{
    //         this.expandData[val.index] = res;
    //         this.expandData[val.index]['status'] = Math.floor(Math.random() * 10);
    //     });
    //     // }
    // }
}
