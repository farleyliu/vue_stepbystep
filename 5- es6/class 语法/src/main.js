import Vue from 'vue';
import {ClassTest, ColorTest} from './one_module'

let test = new ClassTest(10, 11);
console.log(test.toString())
let test2 = new ColorTest(10, 11, 'yellow');
console.log(test2.toString())