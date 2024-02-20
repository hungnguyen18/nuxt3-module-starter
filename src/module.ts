import {
  defineNuxtModule,
  addComponent,
  createResolver,
  addPlugin,
} from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxtStarter',
    configKey: 'nuxtStarter',
  },
  defaults: {
    config: {},
  },
  setup(_options, _nuxt) {
    // Only enable for production
    const { resolve } = createResolver(import.meta.url)

    addComponent({
      name: 'test',
      global: true,
      filePath: resolve('./components/test.vue'),
    })

    addPlugin(resolve('./plugins/starter'))
  },
})
