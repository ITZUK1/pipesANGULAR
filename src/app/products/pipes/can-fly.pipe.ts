import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'canfly'
})

export class canFlypipe implements PipeTransform{


    transform(value: boolean,): 'vuela'|'no vuela' {
        return value? 'vuela':'no vuela';
    }
}