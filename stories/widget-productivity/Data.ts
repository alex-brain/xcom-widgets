import { IProductivityWidgetProps } from '../../src/widget-productivity/Widget';
import { getUsers } from '../../src/common/CommonData';
import faker from 'faker/locale/ru';

export interface IProductivityWidgetData extends Omit<IProductivityWidgetProps, 'onSelect'> {}

export const PRODUCTIVITY_WIDGET_DATA: Record<string, IProductivityWidgetData> = {
  LOADING: {
    isLoading: true,
    users: [
      { id: '468a97a1-1da3-4cfc-a338-aa68650b54aa', visibleName: 'Веселов Степан' },
      { id: '0f916247-bce9-404b-a02b-4a8fa4e7a089', visibleName: 'Кудрявцев Иван' },
      {
        id: 'd2e43c4c-95ff-46f0-98ed-a590b3b13b2c',
        visibleName: 'Владимиров Денис',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      { id: 'b5a1c936-07c3-4d0e-bac7-88d29ceba490', visibleName: 'Щербакова Семён' },
    ],
    items: [],
  },
  ERROR: {
    isLoading: false,
    users: [
      { id: '468a97a1-1da3-4cfc-a338-aa68650b54aa', visibleName: 'Веселов Степан' },
      { id: '0f916247-bce9-404b-a02b-4a8fa4e7a089', visibleName: 'Кудрявцев Иван' },
      {
        id: 'd2e43c4c-95ff-46f0-98ed-a590b3b13b2c',
        visibleName: 'Владимиров Денис',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      { id: 'b5a1c936-07c3-4d0e-bac7-88d29ceba490', visibleName: 'Щербакова Семён' },
    ],
    items: [],
  },
  DEFAULT: {
    isLoading: false,
    users: [
      { id: '33199259-62a2-4db3-8d39-8d9ae5ede5bd', visibleName: 'Брагин Анжела' },
      {
        id: '9f7ce03f-882d-4ed7-babb-a83c66076140',
        visibleName: 'Меркушев Ярослав',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      { id: 'b8ef54e5-0e5f-41e2-b9e4-7334fcba5f37', visibleName: 'Тимофеев Игнатий' },
      { id: 'a8afe08a-487a-47fe-b244-d5954060ff2d', visibleName: 'Миронова Альберт' },
      { id: '25b9c6fe-6714-40ca-8f9f-63e6a7bb14e8', visibleName: 'Борисова Алёна' },
      {
        id: '4f172f42-79dd-4ade-a18a-6f726e23a683',
        visibleName: 'Веселов Ангелина',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      { id: '164740d3-8fb7-4793-88c7-ca75b067c16f', visibleName: 'Матвеева Василиса' },
    ],
    items: [
      {
        user: { id: '33199259-62a2-4db3-8d39-8d9ae5ede5bd', visibleName: 'Брагин Анжела' },
        troubles: { totalCount: 0 },
        calls: {
          factCallsCount: 89,
          planCallsCount: 121,
          outgoingTalksCount: 71,
          incomingTalksCount: 0,
          spentTime: 7076000,
        },
        deals: {
          newDealsCount: 172,
          billsSum: 73450,
          billsCount: 0,
          paidSum: 73450,
          paidCount: 0,
          monthPlanSum: 179680,
          monthFactSum: 143970,
          declinedCount: 123,
        },
      },
      {
        user: {
          id: '9f7ce03f-882d-4ed7-babb-a83c66076140',
          visibleName: 'Меркушев Ярослав',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 0 },
        calls: {
          factCallsCount: 5,
          planCallsCount: 57,
          outgoingTalksCount: 29,
          incomingTalksCount: 19,
          spentTime: 779000,
        },
        deals: {
          newDealsCount: 307,
          billsSum: 57860,
          billsCount: 6,
          paidSum: 44050,
          paidCount: 5,
          monthPlanSum: 228500,
          monthFactSum: 51870,
          declinedCount: 258,
        },
      },
      {
        user: { id: 'b8ef54e5-0e5f-41e2-b9e4-7334fcba5f37', visibleName: 'Тимофеев Игнатий' },
        troubles: { totalCount: 3 },
        calls: {
          factCallsCount: 17,
          planCallsCount: 66,
          outgoingTalksCount: 35,
          incomingTalksCount: 19,
          spentTime: 5045000,
        },
        deals: {
          newDealsCount: 354,
          billsSum: 30310,
          billsCount: 19,
          paidSum: 1810,
          paidCount: 2,
          monthPlanSum: 41570,
          monthFactSum: 8800,
          declinedCount: 271,
        },
      },
      {
        user: { id: 'a8afe08a-487a-47fe-b244-d5954060ff2d', visibleName: 'Миронова Альберт' },
        troubles: { totalCount: 0 },
        calls: {
          factCallsCount: 52,
          planCallsCount: 102,
          outgoingTalksCount: 59,
          incomingTalksCount: 11,
          spentTime: 380000,
        },
        deals: {
          newDealsCount: 194,
          billsSum: 91160,
          billsCount: 5,
          paidSum: 80030,
          paidCount: 3,
          monthPlanSum: 420850,
          monthFactSum: 218770,
          declinedCount: 174,
        },
      },
      {
        user: { id: '25b9c6fe-6714-40ca-8f9f-63e6a7bb14e8', visibleName: 'Борисова Алёна' },
        troubles: { totalCount: 13 },
        calls: {
          factCallsCount: 4,
          planCallsCount: 186,
          outgoingTalksCount: 6,
          incomingTalksCount: 3,
          spentTime: 5586000,
        },
        deals: {
          newDealsCount: 300,
          billsSum: 66140,
          billsCount: 3,
          paidSum: 27260,
          paidCount: 1,
          monthPlanSum: 88800,
          monthFactSum: 53040,
          declinedCount: 152,
        },
      },
      {
        user: {
          id: '4f172f42-79dd-4ade-a18a-6f726e23a683',
          visibleName: 'Веселов Ангелина',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 0 },
        calls: {
          factCallsCount: 66,
          planCallsCount: 19,
          outgoingTalksCount: 28,
          incomingTalksCount: 9,
          spentTime: 3878000,
        },
        deals: {
          newDealsCount: 417,
          billsSum: 25900,
          billsCount: 8,
          paidSum: 13610,
          paidCount: 6,
          monthPlanSum: 65770,
          monthFactSum: 39730,
          declinedCount: 392,
        },
      },
      {
        user: { id: '164740d3-8fb7-4793-88c7-ca75b067c16f', visibleName: 'Матвеева Василиса' },
        troubles: { totalCount: 41 },
        calls: {
          factCallsCount: 66,
          planCallsCount: 24,
          outgoingTalksCount: 56,
          incomingTalksCount: 19,
          spentTime: 5527000,
        },
        deals: {
          newDealsCount: 90,
          billsSum: 64450,
          billsCount: 9,
          paidSum: 2190,
          paidCount: 7,
          monthPlanSum: 88240,
          monthFactSum: 3020,
          declinedCount: 63,
        },
      },
    ],
  },
  MIN: {
    isLoading: false,
    users: [{ id: '52dfd2c7-52cc-4c52-96cf-157659acf7cb', visibleName: 'Зуев Вера' }],
    items: [
      {
        user: { id: '52dfd2c7-52cc-4c52-96cf-157659acf7cb', visibleName: 'Зуев Вера' },
        troubles: { totalCount: 0 },
        calls: {
          factCallsCount: 3,
          planCallsCount: 10,
          outgoingTalksCount: 1,
          incomingTalksCount: 0,
          spentTime: 6699000,
        },
        deals: {
          newDealsCount: 8,
          billsSum: 1500,
          billsCount: 1,
          paidSum: 0,
          paidCount: 0,
          monthPlanSum: 25000,
          monthFactSum: 0,
          declinedCount: 3,
        },
      },
    ],
  },
  MAX: {
    isLoading: false,
    users: [
      {
        id: '1156696a-0692-4804-af5a-34039a491b24',
        visibleName: 'Гущина Анатолий',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      { id: '4e8b2b02-746c-4f02-a0af-56c017088168', visibleName: 'Петухова Людмила' },
      { id: '4e4ae416-4383-4489-912f-38407303af10', visibleName: 'Ефимова Георгий' },
      {
        id: 'b8f6a88e-bfe5-4bf5-900e-e2128c70c2b8',
        visibleName: 'Меркушев Варвара',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      { id: '35b23c55-082e-42fa-9ce3-0ada3a6c155d', visibleName: 'Пахомова Эдуард' },
      { id: '4aa035c3-a51e-47f1-a020-056e91b30448', visibleName: 'Наумова Семён' },
      {
        id: '15f41f53-aaa2-424c-b238-d102745463f4',
        visibleName: 'Мельникова Таисия',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      {
        id: 'e85babab-b993-402e-8c7e-8b2ed637a5c4',
        visibleName: 'Голубева Виктор',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      {
        id: '87b7705c-ca6b-4d34-80ef-2c5220a2f010',
        visibleName: 'Рябов Ольга',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      {
        id: '6c00fd8a-6606-478e-bf35-cc844ac5ea54',
        visibleName: 'Ковалева Ольга',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      { id: 'e651e674-deae-42a1-9c55-9a3bb0e6ecf3', visibleName: 'Трофимова Николай' },
      {
        id: '10624cf8-112f-402c-8a53-031cce27a1eb',
        visibleName: 'Харитонова Геннадий',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      { id: '3873e62b-a8e2-47dd-9731-1d47233fb591', visibleName: 'Комиссарова Римма' },
      {
        id: 'e4efb69c-ea8a-4f94-b170-53e35f02d14b',
        visibleName: 'Зимина Григорий',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      {
        id: '4bc7f409-f289-4db6-9258-baaadadb3725',
        visibleName: 'Дорофеев Нина',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
    ],
    items: [
      {
        user: {
          id: '1156696a-0692-4804-af5a-34039a491b24',
          visibleName: 'Гущина Анатолий',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 389 },
        calls: {
          factCallsCount: 27,
          planCallsCount: 69,
          outgoingTalksCount: 3,
          incomingTalksCount: 11,
          spentTime: 4212000,
        },
        deals: {
          newDealsCount: 355,
          billsSum: 15950,
          billsCount: 8,
          paidSum: 15950,
          paidCount: 8,
          monthPlanSum: 76080,
          monthFactSum: 50280,
          declinedCount: 157,
        },
      },
      {
        user: { id: '4e8b2b02-746c-4f02-a0af-56c017088168', visibleName: 'Петухова Людмила' },
        troubles: { totalCount: 148 },
        calls: {
          factCallsCount: 1,
          planCallsCount: 92,
          outgoingTalksCount: 38,
          incomingTalksCount: 4,
          spentTime: 3712000,
        },
        deals: {
          newDealsCount: 241,
          billsSum: 53610,
          billsCount: 6,
          paidSum: 49010,
          paidCount: 5,
          monthPlanSum: 247170,
          monthFactSum: 157810,
          declinedCount: 152,
        },
      },
      {
        user: { id: '4e4ae416-4383-4489-912f-38407303af10', visibleName: 'Ефимова Георгий' },
        troubles: { totalCount: 453 },
        calls: {
          factCallsCount: 69,
          planCallsCount: 150,
          outgoingTalksCount: 80,
          incomingTalksCount: 20,
          spentTime: 1158000,
        },
        deals: {
          newDealsCount: 44,
          billsSum: 97660,
          billsCount: 16,
          paidSum: 67240,
          paidCount: 1,
          monthPlanSum: 248510,
          monthFactSum: 205970,
          declinedCount: 25,
        },
      },
      {
        user: {
          id: 'b8f6a88e-bfe5-4bf5-900e-e2128c70c2b8',
          visibleName: 'Меркушев Варвара',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 383 },
        calls: {
          factCallsCount: 40,
          planCallsCount: 39,
          outgoingTalksCount: 28,
          incomingTalksCount: 15,
          spentTime: 3821000,
        },
        deals: {
          newDealsCount: 477,
          billsSum: 92810,
          billsCount: 20,
          paidSum: 30500,
          paidCount: 3,
          monthPlanSum: 275320,
          monthFactSum: 71730,
          declinedCount: 405,
        },
      },
      {
        user: { id: '35b23c55-082e-42fa-9ce3-0ada3a6c155d', visibleName: 'Пахомова Эдуард' },
        troubles: { totalCount: 759 },
        calls: {
          factCallsCount: 25,
          planCallsCount: 172,
          outgoingTalksCount: 55,
          incomingTalksCount: 16,
          spentTime: 4406000,
        },
        deals: {
          newDealsCount: 435,
          billsSum: 15440,
          billsCount: 12,
          paidSum: 6440,
          paidCount: 6,
          monthPlanSum: 70320,
          monthFactSum: 10280,
          declinedCount: 361,
        },
      },
      {
        user: { id: '4aa035c3-a51e-47f1-a020-056e91b30448', visibleName: 'Наумова Семён' },
        troubles: { totalCount: 671 },
        calls: {
          factCallsCount: 60,
          planCallsCount: 109,
          outgoingTalksCount: 43,
          incomingTalksCount: 11,
          spentTime: 3564000,
        },
        deals: {
          newDealsCount: 159,
          billsSum: 55030,
          billsCount: 0,
          paidSum: 55030,
          paidCount: 0,
          monthPlanSum: 201940,
          monthFactSum: 126380,
          declinedCount: 3,
        },
      },
      {
        user: {
          id: '15f41f53-aaa2-424c-b238-d102745463f4',
          visibleName: 'Мельникова Таисия',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 476 },
        calls: {
          factCallsCount: 18,
          planCallsCount: 120,
          outgoingTalksCount: 37,
          incomingTalksCount: 1,
          spentTime: 2106000,
        },
        deals: {
          newDealsCount: 293,
          billsSum: 40550,
          billsCount: 3,
          paidSum: 22510,
          paidCount: 0,
          monthPlanSum: 57510,
          monthFactSum: 46590,
          declinedCount: 225,
        },
      },
      {
        user: {
          id: 'e85babab-b993-402e-8c7e-8b2ed637a5c4',
          visibleName: 'Голубева Виктор',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 358 },
        calls: {
          factCallsCount: 48,
          planCallsCount: 171,
          outgoingTalksCount: 64,
          incomingTalksCount: 5,
          spentTime: 4682000,
        },
        deals: {
          newDealsCount: 142,
          billsSum: 21700,
          billsCount: 3,
          paidSum: 2680,
          paidCount: 2,
          monthPlanSum: 60980,
          monthFactSum: 12580,
          declinedCount: 53,
        },
      },
      {
        user: {
          id: '87b7705c-ca6b-4d34-80ef-2c5220a2f010',
          visibleName: 'Рябов Ольга',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 63 },
        calls: {
          factCallsCount: 20,
          planCallsCount: 47,
          outgoingTalksCount: 36,
          incomingTalksCount: 7,
          spentTime: 3683000,
        },
        deals: {
          newDealsCount: 329,
          billsSum: 91350,
          billsCount: 17,
          paidSum: 17390,
          paidCount: 9,
          monthPlanSum: 349500,
          monthFactSum: 27780,
          declinedCount: 191,
        },
      },
      {
        user: {
          id: '6c00fd8a-6606-478e-bf35-cc844ac5ea54',
          visibleName: 'Ковалева Ольга',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 895 },
        calls: {
          factCallsCount: 38,
          planCallsCount: 86,
          outgoingTalksCount: 60,
          incomingTalksCount: 2,
          spentTime: 6239000,
        },
        deals: {
          newDealsCount: 347,
          billsSum: 85400,
          billsCount: 12,
          paidSum: 85400,
          paidCount: 12,
          monthPlanSum: 393020,
          monthFactSum: 108050,
          declinedCount: 327,
        },
      },
      {
        user: { id: 'e651e674-deae-42a1-9c55-9a3bb0e6ecf3', visibleName: 'Трофимова Николай' },
        troubles: { totalCount: 662 },
        calls: {
          factCallsCount: 26,
          planCallsCount: 187,
          outgoingTalksCount: 78,
          incomingTalksCount: 1,
          spentTime: 2975000,
        },
        deals: {
          newDealsCount: 36,
          billsSum: 7850,
          billsCount: 10,
          paidSum: 2100,
          paidCount: 3,
          monthPlanSum: 35730,
          monthFactSum: 5040,
          declinedCount: 26,
        },
      },
      {
        user: {
          id: '10624cf8-112f-402c-8a53-031cce27a1eb',
          visibleName: 'Харитонова Геннадий',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 822 },
        calls: {
          factCallsCount: 65,
          planCallsCount: 143,
          outgoingTalksCount: 8,
          incomingTalksCount: 17,
          spentTime: 1811000,
        },
        deals: {
          newDealsCount: 458,
          billsSum: 78250,
          billsCount: 10,
          paidSum: 17660,
          paidCount: 5,
          monthPlanSum: 260760,
          monthFactSum: 51540,
          declinedCount: 252,
        },
      },
      {
        user: { id: '3873e62b-a8e2-47dd-9731-1d47233fb591', visibleName: 'Комиссарова Римма' },
        troubles: { totalCount: 108 },
        calls: {
          factCallsCount: 23,
          planCallsCount: 90,
          outgoingTalksCount: 53,
          incomingTalksCount: 16,
          spentTime: 5753000,
        },
        deals: {
          newDealsCount: 460,
          billsSum: 14590,
          billsCount: 18,
          paidSum: 11140,
          paidCount: 12,
          monthPlanSum: 46450,
          monthFactSum: 53830,
          declinedCount: 288,
        },
      },
      {
        user: {
          id: 'e4efb69c-ea8a-4f94-b170-53e35f02d14b',
          visibleName: 'Зимина Григорий',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 702 },
        calls: {
          factCallsCount: 9,
          planCallsCount: 186,
          outgoingTalksCount: 39,
          incomingTalksCount: 8,
          spentTime: 246000,
        },
        deals: {
          newDealsCount: 308,
          billsSum: 64760,
          billsCount: 11,
          paidSum: 17340,
          paidCount: 8,
          monthPlanSum: 145930,
          monthFactSum: 22530,
          declinedCount: 284,
        },
      },
      {
        user: {
          id: '4bc7f409-f289-4db6-9258-baaadadb3725',
          visibleName: 'Дорофеев Нина',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 633 },
        calls: {
          factCallsCount: 41,
          planCallsCount: 160,
          outgoingTalksCount: 3,
          incomingTalksCount: 19,
          spentTime: 1234000,
        },
        deals: {
          newDealsCount: 257,
          billsSum: 50300,
          billsCount: 13,
          paidSum: 29410,
          paidCount: 8,
          monthPlanSum: 158050,
          monthFactSum: 35360,
          declinedCount: 157,
        },
      },
    ],
  },
};

export function getRandomProductivityData(): IProductivityWidgetData {
  const users = getUsers(faker.random.number({ min: 1, max: 10, precision: 1 }));
  return {
    isLoading: false,
    users: users,
    items: users.map(user => {
      const newDealsCount = faker.random.number({ min: 0, max: 500, precision: 1 });
      const billsCount = faker.random.number({ min: 0, max: 20, precision: 1 });
      const paidCount = faker.random.number({ min: 0, max: billsCount, precision: 1 });
      const declinedCount = faker.random.number({ min: 0, max: newDealsCount - billsCount, precision: 1 });
      const billsSum = faker.random.number({ min: 1000, max: 100000, precision: 10 });
      const paidSum =
        billsCount === paidCount ? billsSum : faker.random.number({ min: 1000, max: billsSum, precision: 10 });

      const monthPlanSum = faker.random.number({ min: billsSum, max: billsSum * 5, precision: 10 });
      const monthFactSum = faker.random.number({ min: paidSum, max: paidSum * 5, precision: 10 });

      return {
        user,
        troubles: {
          totalCount: faker.random.number({ min: 0, max: 999, precision: 1 }),
        },
        calls: {
          factCallsCount: faker.random.number({ min: 0, max: 100, precision: 1 }),
          planCallsCount: faker.random.number({ min: 0, max: 200, precision: 1 }),
          outgoingTalksCount: faker.random.number({ min: 0, max: 80, precision: 1 }),
          incomingTalksCount: faker.random.number({ min: 0, max: 20, precision: 1 }),
          spentTime: faker.random.number({ min: 30000, max: 30000 * 240, precision: 1000 }),
        },
        deals: {
          newDealsCount,
          billsSum,
          billsCount,
          paidSum,
          paidCount,
          monthPlanSum,
          monthFactSum,
          declinedCount,
        },
      };
    }),
  };
}
