import ActionButton from "./shared/ui/action-button";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-screen bg-background">
      <nav className="w-full h-24 shadow bg-surface-container-lowest flex justify-between items-center">
        {/* <Image src="/logo.svg" alt="logo" width={100} height={100} /> */}
        <svg className="w-10 h-10 text-primary mx-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z" clip-rule="evenodd" />
        </svg>

        <div className="">
          <p className="text-on-surface">Internal Weekly Report Meeting, Marketing Plus sales</p>
          <small className="text-outline-variant">23, June 2023</small>
        </div>

        <div className="mx-4">
          <div className="flex items-center justify-between gap-4 bg-surface-container-low py-2 px-4 rounded-full w-72">
            <img className="rounded-full" src="http://via.placeholder.com/40" alt="logo" width={45} height={40} />

            <div className="basis-3/4">
              <p className="text-on-surface">Addam Joseph</p>
              <small className="text-outline-variant">Admin</small>
            </div>

            <div className="">
              <span className="material-symbols-outlined">
                more_vert
              </span>
            </div>


          </div>

        </div>
      </nav>
      <div className="flex justify-between h-full">
        <div className="w-4/5">
          <div className="flex flex-col justify-between w-full h-full">
            <div className="w-full h-3/6 bg-surface-container-high">
              e
            </div>
            <div className="w-full h-2/6 bg-surface-container-high">
              t
            </div>
            <div className="w-full h-1/6">
              <div className="bg-surface-container-lowest h-full">
                <div className="flex justify-center items-center h-full">
                  <div className="flex gap-8">
                  <ActionButton cssClass={"bg-primary text-on-primary"} icon={"mic"} />
                  <ActionButton cssClass={"bg-primary text-on-primary"} icon={"videocam"} />
                  <ActionButton cssClass={"bg-primary-fixed text-on-primary-fixed"} icon={"ios_share"} />
                  <ActionButton cssClass={"bg-secondary text-on-secondary"} icon={"radio_button_checked"} />
                  <ActionButton cssClass={"bg-primary-fixed text-on-primary-fixed"} icon={"chat"} />
                  <ActionButton cssClass={"bg-primary-fixed text-on-primary-fixed"} icon={"more_vert"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/5">2</div>

      </div>

    </main>
  );
}
