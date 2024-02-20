import { typescript, nitro } from './configs/index'

export default defineNuxtConfig({
    css: ['~/styles/global.css'],
    modules: ['../src/module'],
    typescript,
    nitro,
})
