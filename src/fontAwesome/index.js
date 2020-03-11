import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRedo,
  faFilter,
  faSearch,
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([faRedo, faFilter, faSearch, faEllipsisH]);

Vue.component("font-awesome-icon", FontAwesomeIcon);
