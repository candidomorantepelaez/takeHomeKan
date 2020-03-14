import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRedo,
  faFilter,
  faSearch,
  faEllipsisH,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([faRedo, faFilter, faSearch, faEllipsisH, faCheck]);

Vue.component("font-awesome-icon", FontAwesomeIcon);
