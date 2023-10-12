import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties : Array<Menu> = [
    {
      id: '1',
      titre: 'Dash Board',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'Global view',
          icon: '',
          url: ''
        },
  
        {
          id: '12',
          titre: 'Statistics',
          icon: '',
          url: 'statistiques'
        }
      ]
    },

    {
      id: '2',
      titre: 'Article',
      icon: 'fas fa-boxes',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          icon: '',
          url: 'articles'
        },
  
        {
          id: '22',
          titre: 'Stock movement',
          icon: '',
          url: 'mvtstk'
        }
      ]
    },

    {
      id: '3',
      titre: 'Customer',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Customers',
          icon: '',
          url: 'customer'
        },
  
        {
          id: '32',
          titre: 'Customer orders',
          icon: '',
          url: 'commandesclient'
        }
      ]
    },

    {
      id: '4',
      titre: 'Supplier',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Suppliers',
          icon: '',
          url: 'supplier'
        },
  
        {
          id: '42',
          titre: 'Supplier orders',
          icon: '',
          url: 'commandesfournisseur'
        }
      ]
    },

    {
      id: '5',
      titre: 'Setings',
      icon: 'fas fa-cogs',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Category',
          icon: '',
          url: 'categorie'
        },
  
        {
          id: '52',
          titre: 'Users',
          icon: '',
          url: 'utilisateurs'
        }
      ]
    }
  ]

  isOpen = false;
  activeMenuItem: Menu | null = null;

  toggleSubMenu(menuItem: Menu) {
    if (this.activeMenuItem === menuItem) {
      this.isOpen = !this.isOpen;
    }else {
      this.isOpen = true;
      this.activeMenuItem = menuItem;
    }
  }

  selectMenuItem(menuItem: Menu) {
    console.log('Selected menu item:', menuItem);
  }

  private lastSelectdeMenu: Menu | undefined;

  constructor(private router: Router) {
    
  }

  navigate(menu: Menu): void {
    if (this.lastSelectdeMenu) {
      this.lastSelectdeMenu.active = false;
    }
    menu.active = true;
    this.lastSelectdeMenu = menu;
    this.router.navigate([menu.url]);
  }

  ngOnInit(): void {}

}