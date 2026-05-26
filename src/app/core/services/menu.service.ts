import { Injectable } from '@angular/core';

import { MenuItem }
from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() {}

  getMenuByRole(
    role: string
  ): MenuItem[] {

    const menus: Record<string, MenuItem[]> = {

      /* ======================================
         SUPER ADMINISTRADOR
      ====================================== */

      superadmin: [

        {
          label: 'Dashboard',
          icon: 'bi bi-speedometer2',
          route: '/dashboard'
        },

        {
          label: 'Empresa',
          icon: 'bi bi-building',

          children: [

            {
              label: 'Datos generales',
              route: '/empresa/datos'
            },

            {
              label: 'Sucursales',
              route: '/empresa/sucursales'
            },

            {
              label: 'Áreas',
              route: '/empresa/areas'
            }

          ]
        },

        {
          label: 'Tablas maestras',
          icon: 'bi bi-table',

          children: [

            {
              label: 'Clientes',
              route: '/maestros/clientes'
            },

            {
              label: 'Proveedores',
              route: '/maestros/proveedores'
            },

            {
              label: 'Productos',
              route: '/maestros/productos'
            }

          ]
        },

        {
          label: 'Ventas',
          icon: 'bi bi-cart',

          children: [

            {
              label: 'Cotizaciones',
              route: '/ventas/cotizaciones'
            },

            {
              label: 'Pedidos',
              route: '/ventas/pedidos'
            },

            {
              label: 'Facturación',
              route: '/ventas/facturacion'
            }

          ]
        },

        {
          label: 'Compras',
          icon: 'bi bi-bag',

          children: [

            {
              label: 'Órdenes de compra',
              route: '/compras/ordenes'
            }

          ]
        },

        {
          label: 'Inventario',
          icon: 'bi bi-box-seam',

          children: [

            {
              label: 'Kardex',
              route: '/inventario/kardex'
            },

            {
              label: 'Movimientos',
              route: '/inventario/movimientos'
            }

          ]
        },

        {
          label: 'Finanzas',
          icon: 'bi bi-cash-stack',

          children: [

            {
              label: 'Caja',
              route: '/finanzas/caja'
            },

            {
              label: 'Bancos',
              route: '/finanzas/bancos'
            }

          ]
        },

        {
          label: 'Seguridad',
          icon: 'bi bi-shield-lock',

          children: [

            {
              label: 'Usuarios',
              route: '/seguridad/usuarios'
            },

            {
              label: 'Roles',
              route: '/seguridad/roles'
            }

          ]
        },

        {
          label: 'Configuración técnica',
          icon: 'bi bi-gear',

          children: [

            {
              label: 'Parámetros',
              route: '/configuracion/parametros'
            },

            {
              label: 'SMTP',
              route: '/configuracion/smtp'
            }

          ]
        }

      ],

      /* ======================================
         ADMIN
      ====================================== */

      admin: [

        {
          label: 'Dashboard',
          icon: 'bi bi-speedometer2',
          route: '/dashboard'
        },

        {
          label: 'Ventas',
          icon: 'bi bi-cart',

          children: [

            {
              label: 'Cotizaciones',
              route: '/ventas/cotizaciones'
            },

            {
              label: 'Pedidos',
              route: '/ventas/pedidos'
            }

          ]
        },

        {
          label: 'Compras',
          icon: 'bi bi-bag',

          children: [

            {
              label: 'Órdenes de compra',
              route: '/compras/ordenes'
            }

          ]
        },

        {
          label: 'Inventario',
          icon: 'bi bi-box-seam',

          children: [

            {
              label: 'Movimientos',
              route: '/inventario/movimientos'
            }

          ]
        }

      ],

      /* ======================================
         USUARIO GENERAL
      ====================================== */

      usuario: [

        {
          label: 'Dashboard',
          icon: 'bi bi-speedometer2',
          route: '/dashboard'
        },

        {
          label: 'Ventas',
          icon: 'bi bi-cart',

          children: [

            {
              label: 'Cotizaciones',
              route: '/ventas/cotizaciones'
            }

          ]
        }

      ]

    };

    return menus[role] || [];
  }

}