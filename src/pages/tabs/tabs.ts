import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
<<<<<<< HEAD
import { ProcurarPage } from '../procurar/procurar';
=======
import { CaronaPage } from '../carona/carona';
>>>>>>> 2870fa898f2d2cc4f05f35df7834a561db026a35

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
<<<<<<< HEAD
  tab3Root = ProcurarPage;
  tab4Root = ContactPage;

=======
  tab3Root = ContactPage;
>>>>>>> 2870fa898f2d2cc4f05f35df7834a561db026a35
  constructor() {

  }
}
