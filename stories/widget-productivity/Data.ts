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
    users: [{ id: 'b286a245-800e-4c33-b1e0-8dc0643d3c67', visibleName: 'Логинова Артём' }],
    items: [
      {
        user: { id: 'b286a245-800e-4c33-b1e0-8dc0643d3c67', visibleName: 'Логинова Артём' },
        troubles: { totalCount: 0 },
        calls: {
          factCallsCount: 1,
          planCallsCount: 15,
          outgoingTalksCount: 3,
          incomingTalksCount: 2,
          spentTime: 1019000,
        },
        deals: {
          newDealsCount: 4,
          billsSum: 1060,
          billsCount: 1,
          paidSum: 1060,
          paidCount: 1,
          monthPlanSum: 1440,
          monthFactSum: 2440,
          declinedCount: 3,
        },
      },
    ],
  },
  MAX: {
    isLoading: false,
    users: [
      {
        id: 'faa0fe82-0fd8-42ab-b924-f5e55dfa2585',
        visibleName: 'Симонов Варвара',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      { id: 'f477022b-b559-44eb-94ea-9013a1a0ea81', visibleName: 'Симонов Валентин' },
      { id: '9bc31689-e28b-440f-97b6-701ac5a67638', visibleName: 'Мишин Лука' },
      {
        id: '71c6d3a8-10d0-405e-89de-04249ba474cb',
        visibleName: 'Носова Алёна',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      { id: '81088315-1b29-49ff-be47-7de99e9ff017', visibleName: 'Маслов Елена' },
      { id: '53dd4085-181f-4644-812d-e642978d12aa', visibleName: 'Суханова Татьяна' },
      { id: '7997f2b6-8015-4aac-bfd8-a3d0fc1e31c3', visibleName: 'Сорокин Валентина' },
      { id: '7c240d08-4758-42ab-ac16-3aea0be604d0', visibleName: 'Маслов София' },
      { id: 'f161b61f-9702-487f-8161-b79798fecc08', visibleName: 'Молчанова София' },
      { id: 'd5c0cae0-fb1b-48ad-a392-2705a936fa7c', visibleName: 'Хохлов Мария' },
      { id: 'ce81822b-8e8c-4a3c-ae52-b3aa971a8a16', visibleName: 'Гущин Валерия' },
      { id: '16fd4b95-46b8-443e-8c92-4c1736774c68', visibleName: 'Бирюков Маргарита' },
      { id: '9a1f7786-1136-4350-9a2b-4af8471f418c', visibleName: 'Чернова Макар' },
      {
        id: '82ef35ec-0daa-4951-9a09-2e55cde98dc9',
        visibleName: 'Гусев Юрий',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
      {
        id: '00c81ea6-7edb-4e8f-8ae3-a2fcd0d9c89f',
        visibleName: 'Носова Виктория',
        avatar:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
      },
    ],
    items: [
      {
        user: {
          id: 'faa0fe82-0fd8-42ab-b924-f5e55dfa2585',
          visibleName: 'Симонов Варвара',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 953 },
        calls: {
          factCallsCount: 526,
          planCallsCount: 682,
          outgoingTalksCount: 210,
          incomingTalksCount: 135,
          spentTime: 3979000,
        },
        deals: {
          newDealsCount: 4373,
          billsSum: 690620,
          billsCount: 122,
          paidSum: 148510,
          paidCount: 100,
          monthPlanSum: 4464900,
          monthFactSum: 1068000,
          declinedCount: 3837,
        },
      },
      {
        user: { id: 'f477022b-b559-44eb-94ea-9013a1a0ea81', visibleName: 'Симонов Валентин' },
        troubles: { totalCount: 149 },
        calls: {
          factCallsCount: 564,
          planCallsCount: 562,
          outgoingTalksCount: 439,
          incomingTalksCount: 97,
          spentTime: 63407000,
        },
        deals: {
          newDealsCount: 1644,
          billsSum: 589830,
          billsCount: 119,
          paidSum: 364790,
          paidCount: 118,
          monthPlanSum: 6044020,
          monthFactSum: 4012900,
          declinedCount: 1101,
        },
      },
      {
        user: { id: '9bc31689-e28b-440f-97b6-701ac5a67638', visibleName: 'Мишин Лука' },
        troubles: { totalCount: 642 },
        calls: {
          factCallsCount: 301,
          planCallsCount: 1557,
          outgoingTalksCount: 264,
          incomingTalksCount: 133,
          spentTime: 38265000,
        },
        deals: {
          newDealsCount: 3668,
          billsSum: 225090,
          billsCount: 174,
          paidSum: 43950,
          paidCount: 158,
          monthPlanSum: 446620,
          monthFactSum: 391550,
          declinedCount: 1678,
        },
      },
      {
        user: {
          id: '71c6d3a8-10d0-405e-89de-04249ba474cb',
          visibleName: 'Носова Алёна',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 739 },
        calls: {
          factCallsCount: 621,
          planCallsCount: 705,
          outgoingTalksCount: 369,
          incomingTalksCount: 98,
          spentTime: 69288000,
        },
        deals: {
          newDealsCount: 1948,
          billsSum: 275440,
          billsCount: 181,
          paidSum: 79330,
          paidCount: 120,
          monthPlanSum: 4293020,
          monthFactSum: 1071420,
          declinedCount: 1120,
        },
      },
      {
        user: { id: '81088315-1b29-49ff-be47-7de99e9ff017', visibleName: 'Маслов Елена' },
        troubles: { totalCount: 811 },
        calls: {
          factCallsCount: 956,
          planCallsCount: 1351,
          outgoingTalksCount: 216,
          incomingTalksCount: 157,
          spentTime: 12579000,
        },
        deals: {
          newDealsCount: 890,
          billsSum: 855110,
          billsCount: 116,
          paidSum: 855110,
          paidCount: 116,
          monthPlanSum: 9155840,
          monthFactSum: 16765000,
          declinedCount: 300,
        },
      },
      {
        user: { id: '53dd4085-181f-4644-812d-e642978d12aa', visibleName: 'Суханова Татьяна' },
        troubles: { totalCount: 987 },
        calls: {
          factCallsCount: 536,
          planCallsCount: 989,
          outgoingTalksCount: 185,
          incomingTalksCount: 148,
          spentTime: 43377000,
        },
        deals: {
          newDealsCount: 3659,
          billsSum: 597660,
          billsCount: 103,
          paidSum: 17330,
          paidCount: 100,
          monthPlanSum: 11089160,
          monthFactSum: 68040,
          declinedCount: 2053,
        },
      },
      {
        user: { id: '7997f2b6-8015-4aac-bfd8-a3d0fc1e31c3', visibleName: 'Сорокин Валентина' },
        troubles: { totalCount: 929 },
        calls: {
          factCallsCount: 808,
          planCallsCount: 1926,
          outgoingTalksCount: 698,
          incomingTalksCount: 184,
          spentTime: 60231000,
        },
        deals: {
          newDealsCount: 3420,
          billsSum: 123820,
          billsCount: 106,
          paidSum: 56140,
          paidCount: 102,
          monthPlanSum: 2475120,
          monthFactSum: 728710,
          declinedCount: 1929,
        },
      },
      {
        user: { id: '7c240d08-4758-42ab-ac16-3aea0be604d0', visibleName: 'Маслов София' },
        troubles: { totalCount: 295 },
        calls: {
          factCallsCount: 765,
          planCallsCount: 243,
          outgoingTalksCount: 576,
          incomingTalksCount: 130,
          spentTime: 27307000,
        },
        deals: {
          newDealsCount: 1803,
          billsSum: 872690,
          billsCount: 193,
          paidSum: 146530,
          paidCount: 155,
          monthPlanSum: 10586120,
          monthFactSum: 164460,
          declinedCount: 570,
        },
      },
      {
        user: { id: 'f161b61f-9702-487f-8161-b79798fecc08', visibleName: 'Молчанова София' },
        troubles: { totalCount: 770 },
        calls: {
          factCallsCount: 653,
          planCallsCount: 1340,
          outgoingTalksCount: 233,
          incomingTalksCount: 147,
          spentTime: 13017000,
        },
        deals: {
          newDealsCount: 4295,
          billsSum: 731610,
          billsCount: 148,
          paidSum: 493000,
          paidCount: 119,
          monthPlanSum: 3066350,
          monthFactSum: 2600870,
          declinedCount: 3797,
        },
      },
      {
        user: { id: 'd5c0cae0-fb1b-48ad-a392-2705a936fa7c', visibleName: 'Хохлов Мария' },
        troubles: { totalCount: 630 },
        calls: {
          factCallsCount: 724,
          planCallsCount: 1826,
          outgoingTalksCount: 450,
          incomingTalksCount: 159,
          spentTime: 16358000,
        },
        deals: {
          newDealsCount: 4472,
          billsSum: 380750,
          billsCount: 139,
          paidSum: 112460,
          paidCount: 132,
          monthPlanSum: 3004110,
          monthFactSum: 2006050,
          declinedCount: 2101,
        },
      },
      {
        user: { id: 'ce81822b-8e8c-4a3c-ae52-b3aa971a8a16', visibleName: 'Гущин Валерия' },
        troubles: { totalCount: 902 },
        calls: {
          factCallsCount: 574,
          planCallsCount: 994,
          outgoingTalksCount: 222,
          incomingTalksCount: 67,
          spentTime: 60887000,
        },
        deals: {
          newDealsCount: 4131,
          billsSum: 593970,
          billsCount: 176,
          paidSum: 65130,
          paidCount: 135,
          monthPlanSum: 7738350,
          monthFactSum: 343870,
          declinedCount: 3330,
        },
      },
      {
        user: { id: '16fd4b95-46b8-443e-8c92-4c1736774c68', visibleName: 'Бирюков Маргарита' },
        troubles: { totalCount: 446 },
        calls: {
          factCallsCount: 812,
          planCallsCount: 1196,
          outgoingTalksCount: 267,
          incomingTalksCount: 71,
          spentTime: 29975000,
        },
        deals: {
          newDealsCount: 2279,
          billsSum: 656110,
          billsCount: 194,
          paidSum: 154520,
          paidCount: 122,
          monthPlanSum: 11641820,
          monthFactSum: 632020,
          declinedCount: 1497,
        },
      },
      {
        user: { id: '9a1f7786-1136-4350-9a2b-4af8471f418c', visibleName: 'Чернова Макар' },
        troubles: { totalCount: 166 },
        calls: {
          factCallsCount: 798,
          planCallsCount: 1233,
          outgoingTalksCount: 145,
          incomingTalksCount: 41,
          spentTime: 17258000,
        },
        deals: {
          newDealsCount: 2877,
          billsSum: 910300,
          billsCount: 160,
          paidSum: 825000,
          paidCount: 105,
          monthPlanSum: 16763060,
          monthFactSum: 1266750,
          declinedCount: 2374,
        },
      },
      {
        user: {
          id: '82ef35ec-0daa-4951-9a09-2e55cde98dc9',
          visibleName: 'Гусев Юрий',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 800 },
        calls: {
          factCallsCount: 866,
          planCallsCount: 1165,
          outgoingTalksCount: 769,
          incomingTalksCount: 159,
          spentTime: 22065000,
        },
        deals: {
          newDealsCount: 1517,
          billsSum: 172760,
          billsCount: 181,
          paidSum: 110760,
          paidCount: 126,
          monthPlanSum: 2682740,
          monthFactSum: 271870,
          declinedCount: 397,
        },
      },
      {
        user: {
          id: '00c81ea6-7edb-4e8f-8ae3-a2fcd0d9c89f',
          visibleName: 'Носова Виктория',
          avatar:
            'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%2224%22%20height%3D%2224%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3E24x24%3C%2Ftext%3E%20%3C%2Fsvg%3E',
        },
        troubles: { totalCount: 788 },
        calls: {
          factCallsCount: 695,
          planCallsCount: 392,
          outgoingTalksCount: 621,
          incomingTalksCount: 61,
          spentTime: 33555000,
        },
        deals: {
          newDealsCount: 2762,
          billsSum: 998810,
          billsCount: 159,
          paidSum: 78710,
          paidCount: 153,
          monthPlanSum: 8532610,
          monthFactSum: 304850,
          declinedCount: 437,
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
