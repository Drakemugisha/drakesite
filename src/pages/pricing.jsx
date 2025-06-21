import NavBar from "../components/nav";
import Footer from "../components/footer";

function Pricing() {
  return (
    <div className="max-w-1208 text-white">
      <NavBar />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-200 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Pricing plans
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-100">
          choose the perfect plan for your business
        </p>

        <div class="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3 lg:gap-5 mt-30">
          <div class="pricing-card relative rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300">
            <div class="px-6 py-8">
              <div class="text-center">
                <h3 class="text-2xl font-medium text-gray-200">Gold</h3>
                <div class="mt-6 flex items-center justify-center">
                  <span class="text-4xl font-extrabold text-gray-100">
                    $300
                  </span>
                </div>
                <p class="mt-4 text-sm text-gray-500">
                  Perfect for small businesses getting started
                </p>
              </div>
              <div class="mt-8">
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-3 text-base text-gray-700">2 webpages</p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-3 text-base text-gray-700">
                      maintenance for two weeks
                    </p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-3 text-base text-gray-700">Email support</p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-3 text-base text-gray-700">
                      communication with customer
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="px-6 py-4">
              <button class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Get started
              </button>
            </div>
          </div>

          <div class="pricing-card relative rounded-lg shadow-md overflow-hidden transition-all duration-300 border border-indigo-500">
            <div class="absolute top-0 left-0 right-0 h-1 bg-indigo-500"></div>
            <div class="px-6 py-8">
              <div class="text-center">
                <h3 class="text-2xl font-medium text-gray-200">Premium</h3>
                <div class="mt-6 flex items-center justify-center">
                  <span class="text-4xl font-extrabold text-gray-100">
                    $700
                  </span>
                </div>
                <p class="mt-4 text-sm text-gray-500">
                  Ideal for growing businesses
                </p>
              </div>
              <div class="mt-8">
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-3 text-base text-gray-700">up to 7 webpages</p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-3 text-base text-gray-700">
                      maintenance for a month
                    </p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-3 text-base text-gray-700">
                      Priority email support
                    </p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-3 text-base text-gray-700">
                      Dedicated backend, allows display of products
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="px-6 py-4">
              <button class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Get started
              </button>
            </div>
          </div>

          <div class="pricing-card relative rounded-lg shadow-md border-2 border-amber-600 overflow-hidden transition-all duration-300">
            <div class="vip-badge px-3 py-1 rounded-full text-white text-xs font-bold">
              VIP
            </div>
            <div class="px-6 py-8">
              <div class="text-center">
                <h3 class="text-2xl font-medium text-gray-200">VIP</h3>
                <div class="mt-6 flex items-center justify-center">
                  <span class="text-4xl font-extrabold text-gray-100">
                    $1000
                  </span>
                </div>
                <p class="mt-4 text-sm text-gray-500">
                  Enterprise-grade solution
                </p>
              </div>
              <div class="mt-8">
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-3 text-base text-gray-700">
                      up to 11 webpages
                    </p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-3 text-base text-gray-700">
                      maintenance for two months
                    </p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-3 text-base text-gray-700">
                      e-commerces, blogs, and websites with up to 1000 products
                    </p>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-3 text-base text-gray-700">
                      Dedicated website support for 24/7
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="px-6 py-4">
              <button class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Get started
              </button>
            </div>
          </div>
        </div>

        <div class="mt-16 text-center">
          <h2 class="text-2xl font-bold text-gray-200">
            Need something custom?
          </h2>
          <p class="mt-4 text-lg text-gray-100">
            We offer custom solutions for businesses with unique requirements.
          </p>
          <button class="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Contact Sales
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;
