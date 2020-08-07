"use strict";
import servicesData from '../data/services.js';


import { Ajax } from './Ajaxs.js';
import {Services} from './services.js';

const request = new Ajax ('services.json', );
const services = new Services ('#services_list',servicesData);

const ad = new Services (' ', [{}, {}])

services.render();