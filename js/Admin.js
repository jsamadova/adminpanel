let password = document.getElementById('password')
let email = document.getElementById('email')
let error = document.getElementById('error')

const admin = 'admin@admin.com'
const adminpas = 'jalesemedova123'

function loginPanel() {
   if (password.value === adminpas && email.value === admin) {
      window.location.href = 'Dashboard.htm'
   }
   else {
      error.innerHTML = ` <div
      class="bg-red-50 text-sm p-3 rounded-md flex flex-col gap-3 border border-red-100 sm:items-center sm:flex-row dark:bg-red-900/20 dark:border-red-800/40"
      role="alert">
      <div class="flex items-center gap-2.5 text-red-900 font-medium dark:text-red-300">
         <svg xmlns="http://www.w3.org/2000/svg" class="size-[18px] fill-current overflow-visible" viewBox="0 0 512 512"
            aria-hidden="true">
            <path
               d="M256 0C114.508 0 0 114.497 0 256c0 141.493 114.497 256 256 256 141.492 0 256-114.497 256-256C512 114.507 397.503 0 256 0m0 472c-119.384 0-216-96.607-216-216 0-119.385 96.607-216 216-216 119.384 0 216 96.607 216 216 0 119.385-96.607 216-216 216"
               data-original="#000000" />
            <path
               d="M343.586 315.302 284.284 256l59.302-59.302c7.81-7.81 7.811-20.473.001-28.284-7.812-7.811-20.475-7.81-28.284 0L256 227.716l-59.303-59.302c-7.809-7.811-20.474-7.811-28.284 0s-7.81 20.474.001 28.284L227.716 256l-59.302 59.302c-7.811 7.811-7.812 20.474-.001 28.284 7.813 7.812 20.476 7.809 28.284 0L256 284.284l59.303 59.302c7.808 7.81 20.473 7.811 28.284 0s7.81-20.474-.001-28.284"
               data-original="#000000" />
         </svg>
         <p>Xəta</p>
      </div>
      <p class="text-red-900 dark:text-red-400">Daxil edilən məlumatlar yanlışdır</p>
   </div>
`
   }
}