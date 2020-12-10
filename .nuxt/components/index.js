export { default as Body } from '../../components/Body.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Form } from '../../components/Form.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyBody = import('../../components/Body.vue' /* webpackChunkName: "components/Body" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyForm = import('../../components/Form.vue' /* webpackChunkName: "components/Form" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
