import { inBrowser } from './util'

export default (lazy) => {
  return {
    props: {
      tag: {
        type: String,
        default: 'div'
      }
    },
    render (h) {
      return h(this.tag, null, this.show ? this.$slots.default : null)
    },
    data () {
      return {
        el: null,
        state: {
          loaded: false
        },
        rect: {},
        show: false,
        isInView: false
      }
    },
    mounted () {
      this.el = this.$el
      lazy.addLazyBox(this)
      lazy.lazyLoadHandler()
    },
    beforeDestroy () {
      lazy.removeComponent(this)
    },
    methods: {
      getRect () {
        this.$el.$$getBoundingClientRect().then(res => {
          this.rect = res 
        })
      },
      checkInView () {
        this.$el.$$getBoundingClientRect().then(res => {
          this.rect = res 
          this.isInView = inBrowser &&
                    (this.rect.top < window.innerHeight * lazy.options.preLoad && this.rect.bottom > 0) &&
                    (this.rect.left < window.innerWidth * lazy.options.preLoad && this.rect.right > 0)
        })
      },
      load () {
        this.show = true
        this.state.loaded = true
        this.$emit('show', this)
      },
      destroy () {
        return this.$destroy
      }
    }
  }
}
