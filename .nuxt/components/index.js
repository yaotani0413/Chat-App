export { default as Alert } from '../../components/Alert.vue'
export { default as CreateRoomModal } from '../../components/CreateRoomModal.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as ModalBase } from '../../components/ModalBase.vue'

export const LazyAlert = import('../../components/Alert.vue' /* webpackChunkName: "components/Alert" */).then(c => c.default || c)
export const LazyCreateRoomModal = import('../../components/CreateRoomModal.vue' /* webpackChunkName: "components/CreateRoomModal" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyModalBase = import('../../components/ModalBase.vue' /* webpackChunkName: "components/ModalBase" */).then(c => c.default || c)
