import Vue from 'vue';
import SvgIconView from "@/components/SvgIconView.vue";
Vue.component('svg-icon-view', SvgIconView)

const req = require.context('@/assets/icons/svg',false,/\.svg$/)
const requireAll = requireContext =>{
    // requireContext.keys()数据：['./404.svg', './agency.svg', './det.svg', './user.svg']
    requireContext.keys().map(requireContext)
}
requireAll(req)
