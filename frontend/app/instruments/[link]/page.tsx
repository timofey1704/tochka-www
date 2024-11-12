import React from 'react'
import Image from 'next/image'
import { fetchInstrumentsListing } from '@/lib/InstrumentsPage/fetchInstrumentsListing'
import { InstrumentListing, ListingProps } from '@/app/types'
import { notFound } from 'next/navigation'

const InstrumentalListing = async ({ params }: ListingProps) => {
  const listings: InstrumentListing[] = await fetchInstrumentsListing()
  const listing = listings.find((list) => list.link === params.link)

  if (!listing) {
    notFound()
  }

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          {listing.headertexts &&
            Array.isArray(listing.headertexts) &&
            listing.headertexts.map((headerText, idx) => (
              <div key={idx}>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {headerText.header}
                </h2>
                <section className="mt-4 text-gray-500 text-justify tracking-tight">
                  {headerText.description}
                </section>
              </div>
            ))}

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {listing.features &&
              Array.isArray(listing.features) &&
              listing.features.map((feature, idx) => (
                <div key={idx} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {listing.images &&
            Array.isArray(listing.images) &&
            listing.images.map((image, idx) => (
              <div key={idx}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={604}
                  height={604}
                  className="rounded-lg bg-gray-100"
                  priority
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default InstrumentalListing
