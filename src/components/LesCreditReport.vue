<template>
  <div v-cloak id="creditreport-app" class="creditreport" data-boostrap-modal="credit">
    <div class="modal modal-credit-redirect-notice" :class="{ 'd-block': modal.isShown }" tabindex="-1">
      <div class="modal-dialog modal-lg m-0 mt-sm-4 mx-sm-auto">
        <div class="modal-content border-left-0 border-right-0 border-bottom-0 border-top border-primary rounded-0">
          <div class="confetti-wrapper">
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
          </div>
          <button @click="disposeModal" type="button" class="close shadow small position-absolute" :class="{ 'd-none': !modal.isClosable }" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&#128077;</span>
          </button>
          <div class="modal-body p-3 p-md-4 text-center">
            <div class="my-3 my-sm-4">

              <svg height="148" viewBox="0 -98 512.0011 512" width="148" xmlns="http://www.w3.org/2000/svg" class="mt-n4">
                <path d="M445.8398 250.7734c-1.3789-50.0859-22.2382-95.6718-55.543-128.9843h-.0038C354.8164 86.3203 306.828 66.16 256 66.16c-49.2734 0-97.7852 19.1172-134.2969 55.629-35.5547 35.5586-54.2344 82.0234-55.543 128.996-.0703 2.5235-2.1601 4.5235-4.6835 4.5235h389.043c-2.5274-.004-4.6094-2.0078-4.6798-4.5352zm0 0" fill="#e4eaf8"/>
                <path d="M156.7344 123.9297c32.2187-33.461 73.7851-52.8438 116.9687-56.9375-5.8515-.5469-11.7578-.832-17.7031-.832-49.2734 0-97.7852 19.1171-134.2969 55.625-35.5547 35.5625-54.2344 82.0234-55.543 128.996-.0703 2.5235-2.1601 4.5235-4.6835 4.5235h39.8086c1.8906-47.8984 20.5234-95.0977 55.4492-131.375zm0 0" fill="#d8dce5"/>
                <path d="M437.0625 75.004C388.9219 26.8827 324.1133 0 256 0v69.6367c49.8945 0 97 19.789 131.8242 54.6055zm0 0" fill="#feca57"/>
                <path d="M74.9336 75l49.2422 49.2422C159.1914 89.2266 206.4063 69.6367 256 69.6367V0C191.5 0 128.7812 23.0781 74.9336 75zm0 0" fill="#15ba8b"/>
                <path d="M74.9336 75l49.2422 49.2422C159.1914 89.2266 206.4063 69.6367 256 69.6367V0C191.5 0 128.7812 23.0781 74.9336 75zm0 0" fill="#15ba8b"/>
                <path d="M0 250.5742c-.0547 2.5899 2.0156 4.7305 4.6055 4.7305h60.4492c2.4766 0 4.5273-1.961 4.5976-4.4375 1.2813-46.1133 19.6211-91.7188 54.5235-126.625L74.9336 75C28.6446 121.289 1.418 183.7227 0 250.5742zm0 0" fill="#54a0ff"/>
                <path d="M106.6523 73.0469C150.2734 30.9844 199.6602 7.664 251.1133.0547 188.3359 1.1953 127.4219 24.3907 74.9336 75l15.6602 15.6602c5.0664-6.0899 10.4218-11.9727 16.0585-17.6133zm0 0" fill="#11aa7b"/>
                <path d="M35.5664 255.3047c-2.621 0-4.7148-2.164-4.6562-4.7813 1.2578-59.4336 22.707-115.4023 59.6835-159.8632L74.9337 75C28.6446 121.289 1.418 183.7227 0 250.5742c-.0547 2.5899 2.0156 4.7305 4.6055 4.7305h60.4492zm0 0" fill="#338def"/>
                <path d="M437.0664 75l-49.2422 49.2422c32.6992 32.7031 53.1719 77.4492 54.5235 126.6172.0703 2.4804 2.1171 4.4453 4.5976 4.4453h60.4492c2.5899 0 4.6602-2.1367 4.6055-4.7305-1.3945-65.207-27.5508-128.207-74.9336-175.5742zm0 0M331.2578 264.254l37.3985-121.008c1.5468-5.0116-3.1485-9.707-8.1563-8.16l-121.0117 37.3984c-52.789 16.3164-69.2852 82.918-30.2149 121.9843 39.0703 39.0704 105.668 22.5743 121.9844-30.2148zm0 0" fill="#ff6b6b"/>
                <path d="M240.1797 294.4688c-39.0703-39.0665-22.5703-105.668 30.2187-121.9844l98.5-30.4414c.5313-4.5235-3.793-8.379-8.3984-6.957l-121.0117 37.3984c-52.789 16.3164-69.2852 82.918-30.2149 121.9844 18.879 18.8789 44.1836 24.7812 67.1368 19.8867-13.0625-2.8125-25.6563-9.3086-36.2305-19.8868zm0 0" fill="#ee5253"/>
                <path d="M282.4766 221.2617c-12.293-12.2969-32.2266-12.2969-44.5235 0-12.293 12.293-12.293 32.2266 0 44.5235 12.2969 12.293 32.2305 12.293 44.5235 0 12.2968-12.297 12.2968-32.2305 0-44.5235zm0 0" fill="#ee5253"/>
                <path d="M275.961 216.254c-12.0391-6.961-27.6993-5.293-38.004 5.0077-12.293 12.293-12.293 32.2305 0 44.5235 10.3008 10.3007 25.9649 11.9648 38.004 5.0078-21.0508-12.172-20.879-42.4649 0-54.539zm0 0" fill="#d83941"/>
              </svg>

              <div v-if="firstName" class="row">
                <div class="col-12 col-md-6 mx-auto">
                  <h4 class="font-weight-normal text-dark mb-0 mb-sm-0 px-2">&#128075; <strong class="text-capitalize">{{ firstName }}</strong>you've been APPROVED!</h4>
                </div>
              </div>

              <div class="row my-3">
                <div class="col-12 col-md-8 col-lg-6 mx-auto">
                  <a @click="disposeModal(); dispatchPluginEvent('vuelescreditreport:on:redirect')" :href="modal.generatedUrl" target="_blank" class="btn btn-block btn-success btn-sm mt-auto font-weight-bolder" :class="{ 'disabled': !modal.generatedUrl }" :disabled="!modal.generatedUrl">
                    <div class="row no-gutters">
                      <div class="col d-flex align-items-center justify-content-around">
                        &#128073;
                      </div>
                      <div class="col-7">
                        Get CASH Now<br />
                        <small class="font-weight-light text-white">(opens in new tab)</small>
                      </div>
                      <div class="col d-flex align-items-center justify-content-around">
                        &#128072;
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-md-6 mx-auto">
                  <h6 class="text-dark mb-0">Next Steps:</h6>
                </div>
              </div>

              <div class="row">
                <div class="col-12 col-lg-10 mx-auto">
                  <div class="row text-left text-lg-center my-4 mt-lg-4 mb-lg-5">
                    <div class="col-12 col-lg-4 d-flex flex-row flex-lg-column align-items-center">
                      <div class="border-light border-left py-2 pl-3 pr-4 pr-lg-0 pl-lg-0 py-lg-0 mb-lg-2">
                        <span class="font-weight-bolder text-light-darken-1">1</span>
                      </div>
                      <div>
                        <h6 class="text-dark mb-1 md-lg-2">Click Button Above</h6>
                        <p class="small text-muted mb-0 px-lg-3">
                          Click your personalised link above which opens in a new tab
                        </p>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 d-flex flex-row flex-lg-column align-items-center my-3 my-lg-0">
                      <div class="border-light border-left py-2 pl-3 pr-4 pr-lg-0 pl-lg-0 py-lg-0 mb-lg-2">
                        <span class="font-weight-bolder text-light-darken-1">2</span>
                      </div>
                      <div>
                        <h6 class="text-dark mb-1 md-lg-2">Confirm Your Details</h6>
                        <p class="small text-muted mb-0 px-lg-3">
                          Confirm details of loan amount and personal circumstances
                        </p>
                      </div>
                    </div>
                    <div class="col-12 col-lg-4 d-flex flex-row flex-lg-column align-items-center">
                      <div class="border-light border-left py-2 pl-3 pr-4 pr-lg-0 pl-lg-0 py-lg-0 mb-lg-2">
                        <span class="font-weight-bolder text-light-darken-1">3</span>
                      </div>
                      <div>
                        <h6 class="text-dark mb-1 md-lg-2">Get Your Loan</h6>
                        <p class="small text-muted mb-0 px-lg-3">
                          Have your money paid into your bank account today
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col col-md-9 col-lg-8 mx-auto">
                  <p class="mt-2 mb-0 small text-dark font-weight-light">
                    (Your loan application is processing in the background, the link above opens a new tab with your personalised credit report offer. Upon signing up for that offer, please return to this tab to view your loan application results)
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div class="pattern-circle position-absolute">
            <div class="pattern-circle--item bg-light-lighten-5"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-backdrop fade" :class="modal.isShown ? 'show' : 'd-none'"></div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/creditmodal.scss';
</style>

<script>
export default {
  props: {
    api: {
      type: String,
      default: 'https://rdrt.org/credit/creditreport'
    },
    mode: {
      type: String,
      default: 'modal'
    },
    excludes: {
      type: String,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      modal: {
        isShown: false,
        isClosable: false,
        generatedUrl: ''
      },
      applicant: {
        title: '',
        name: {
          first: '',
          last: ''
        },
        mobile: '',
        birthday: '',
        dobDay: '',
        dobMonth: '',
        dobYear: '',
        email: '',
        address: {
          house: '',
          street: '',
          city: '',
          postcode: ''
        },
        tlp: ''
      }
    }
  },
  mounted () {
    this.initEventListeners()
  },
  methods: {

    /*
    ** init custom event listeners
    */
    initEventListeners () {
      const self = this

      // submit the application
      document.addEventListener('vuelescreditreport:submit', this.submitApplication)

      // show the modal
      document.addEventListener('vuelescreditreport:modal:show', function (evt) {
        self.modal.isShown = true
      }, false)

      // hide the modal
      document.addEventListener('vuelescreditreport:modal:hide', function (evt) {
        self.modal.isShown = false
      }, false)

      // set an applicant
      document.addEventListener('vuelescreditreport:applicant:set', function (evt) {
        self.applicant = evt.detail
      }, false)
    },


    /*
    ** trigger event
    */
    dispatchPluginEvent (evtName) {
      document.dispatchEvent(new Event(evtName))
    },


    /*
    ** submit the application
    */
    submitApplication () {
      const endpoint = this.getEndpoint()

      if (this.mode == 'modal' && this.enableModal()) {
        this.dispatchPluginEvent('vuelescreditreport:on:submit')
        this.launchModal(endpoint)
        return
      }

      this.dispatchPluginEvent('vuelescreditreport:on:submit')
      this.launchLegacy(endpoint)
    },


    /*
    ** get endpoint and data
    */
    getEndpoint () {
      const {
        title,
        name: {
          first,
          last
        },
        mobile,
        dobDay,
        dobMonth,
        dobYear,
        email,
        address: {
          house,
          street,
          city,
          postcode
        },
        tlp
      } = this.applicant

      const url = `${this.api}?email=${email}&phone=${mobile}&fname=${first}&lname=${last}&dbd=${dobDay}&dbm=${dobMonth}&dby=${dobYear}&house_number=${house}&street=${street}&city=${city}&zip=${postcode}&title=${title}&aff_id=${tlp}&promotion_id=&unique_id=`
      return url
    },


    /*
    ** Modal Open
    **
    **    open the modal
    */

    launchModal (endpoint) {
      this.modal.generatedUrl = endpoint ? endpoint : ''
      this.modal.isShown = true
      this.dispatchPluginEvent('vuelescreditreport:on:modal:launch')

      setTimeout(() => {
        this.modal.isClosable = true
      }, 3000)
    },


    /*
    ** Modal Close
    **
    **    close the modal
    */

    disposeModal () {
      this.modal.isShown = false
    },


    /*
    ** Legacy Mode
    **
    **    detect whether popups could be blocked and show the right variant
    */

    launchLegacy (endpoint) {
      const win = window.open(endpoint, '_blank')
      try {
        if (!win || win.closed || typeof win.closed == 'undefined') {
          this.dispatchPluginEvent('vuelescreditreport:on:popups:blocked')
          this.launchModal(endpoint)
        } else {
          this.dispatchPluginEvent('vuelescreditreport:on:redirect')
        }
      } catch (err) {
        this.launchModal(endpoint)
      }
    },


    /*
    ** Modal
    **
    **    return a boolean value if we should enable the modal
    */

    enableModal () {
      for (const string of JSON.parse(this.excludes)) {
      	if (this.applicant.tlp.includes(string)) {
          return false
        }
      }

      // enable the modal
      return true
    }


  },
  computed: {
    firstName () {
      const name = this.applicant.name.first
      if (name && name != '') {
        return `${name}, `
      }
      return name
    }
  }
}
</script>
