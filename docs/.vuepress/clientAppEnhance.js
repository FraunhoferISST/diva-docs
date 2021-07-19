import { defineClientAppEnhance } from '@vuepress/client'
import CardLink from './theme/components/base/CardLink'
import DataModel from './theme/components/DataModel/DataModel'
import JsonSchemasModel from './theme/components/JsonSchemasModel'

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.component('CardLink', CardLink)
    app.component('DataModel', DataModel)
    app.component('JsonSchemasModel', JsonSchemasModel)
})