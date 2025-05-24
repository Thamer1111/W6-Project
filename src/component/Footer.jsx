import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-2">ACTIVISION.COM</h4>
          <ul className="space-y-1 text-sm">
            <li>ABOUT US</li>
            <li>CAREERS</li>
            <li>PRESS CENTER</li>
            <li>RATINGS & RESOURCES</li>
            <li>INVESTOR RELATIONS</li>
            <li>NEWS</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">SUPPORT</h4>
          <ul className="space-y-1 text-sm">
            <li>GAMES</li>
            <li>SUPPORT OPTIONS</li>
            <li>GAME MANUALS</li>
            <li>SOFTWARE LICENSE AGREEMENTS</li>
            <li>TWITTER</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">PRIVACY</h4>
          <ul className="space-y-1 text-sm">
            <li>LEGAL</li>
            <li>TERMS OF USE</li>
            <li>PRIVACY POLICY</li>
            <li>COOKIE POLICY</li>
            <li>COOKIE SETTINGS</li>
            <li>ESRB.ORG</li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            <img src="https://support.activision.com/content/dam/atvi/support/common/footer/esrb-rating.png" alt="ESRB" className="h-8" />
            <img src="https://support.activision.com/content/dam/atvi/support/common/footer/usk-18.png" alt="PEGI" className="h-8" />
            <img src="https://support.activision.com/content/dam/atvi/support/common/footer/esrb-privacy.gif" alt="ESRB Privacy" className="h-10" />
          </div>
          <div className="flex flex-col items-center md:items-end">
            <img src="https://support.activision.com/content/dam/atvi/support/common/footer/atvilogo-wht-footer.png" alt="Activision" className="h-6 mb-1" />
            <span className="text-xs text-gray-400">
              Copyright 2025 Activision Publishing, Inc.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
