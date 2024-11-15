import { atom, selector } from "recoil"
export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
})

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
})

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
})

export const messagesAtom = atom({
  key: "messagesAtom",
  default: 0,
})

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const netCount = get(networkAtom)
    const notiCount = get(notificationsAtom)
    const msgCount = get(messagesAtom)
    const jobsCount = get(jobsAtom)

    const totalNotificationCount = netCount + notiCount + msgCount + jobsCount
    return totalNotificationCount
  },
})
