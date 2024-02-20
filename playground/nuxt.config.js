import { typescript, nitro, module } from './configs/index'

export default defineNuxtConfig({
    css: ['~/styles/global.css'],
    modules: [['../src', module]],
    typescript,
    nitro,
})
