<template>
  <header>
  
  <div class="container">
    <div class="row">
      <div class="col-md-2  "><img src="@/assets/logo.png" class="logo" alt="" width="100%"></div>
      <div class="col-md-7 d-flex align-items-center justify-content-center">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Plans</a>
          </li>
          <li class="nav-item dropdrown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Organizations</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Browse courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Support</a>
          </li>
          
        </ul>
      </div>
      <div class="col-md-3 d-flex align-items-center justify-content-around">
        <button type="button" class="btn btn-outline-secondary">Sign in</button>
        <button type="button" class="btn btn-primary">7 day trial</button>
      </div>
    </div>
  </div>
  </header>
</template>
