import { snapshot_UNSTABLE } from "recoil"
import { countAtom } from "./atoms"

import { snapshot_UNSTABLE } from "recoil"
import { countAtom } from "./atoms"

export function getServerSideProps() {
  const snapshot = snapshot_UNSTABLE(({ set }) => {
    set(countAtom, 45)
  })

  return {
    props: {
      initialRecoilState: snapshot.toJSON(),
    },
  }
}
