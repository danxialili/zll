import {Component} from "@angular/core";
import {SimpleTableColumn} from "@delon/abc";

@Component({
    selector:'expand-table',
    templateUrl:'./expand-tabale.compoent.html'
})
export  class ExpandTabaleCompoent{
    public  searchValue: string;

    users: any[] = Array(10).fill({}).map((item: any, idx: number) => {
        return {
            id: idx + 1,
            name: `name ${idx + 1}`,
            age: Math.ceil(Math.random() * 10) + 20,
            description: `${idx + 1}. My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.`
        };
    });
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id' },
        { title: '姓名', index: 'name' },
        { title: '年龄', index: 'age' }
    ];
}
