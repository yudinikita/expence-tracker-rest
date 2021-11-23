import {
  HomePage, TransactionPage, CreateTransactionPage,
  DetailTransactionPage, AnalyticsPage, SettingsPage,
  SearchTransactionsPage, CategoriesPage, CategoriesDetailPage,
  SettingsEmailPage, SettingsSecurityPage, SettingsLanguageCurrencyPage,
  HelpPage
} from '../pages'

export const privateRoutes = [
  { id: 0, path: '/', component: HomePage, exact: true },
  { id: 1, path: '/transactions', component: TransactionPage, exact: true },
  { id: 2, path: '/transactions/search', component: SearchTransactionsPage, exact: true },
  { id: 3, path: '/transactions/create', component: CreateTransactionPage, exact: true },
  { id: 4, path: '/transactions/:id', component: DetailTransactionPage, exact: true },
  { id: 5, path: '/analytics', component: AnalyticsPage, exact: true },
  { id: 6, path: '/settings', component: SettingsPage, exact: true },
  { id: 7, path: '/settings/email', component: SettingsEmailPage, exact: true },
  { id: 8, path: '/settings/security', component: SettingsSecurityPage, exact: true },
  { id: 9, path: '/settings/language-currency', component: SettingsLanguageCurrencyPage, exact: true },
  { id: 10, path: '/categories', component: CategoriesPage, exact: true },
  { id: 11, path: '/categories/:id', component: CategoriesDetailPage, exact: true },
  { id: 12, path: '/help', component: HelpPage, exact: true }
]
