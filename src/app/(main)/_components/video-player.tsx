"use client"

import { Button } from '@/components/ui/button'
import { useCheckPremium } from '@/lib/hooks/users/use-check-premium'
import React from 'react'

export const VideoPlayer = () => {
 
    const {
      data: isPremium,
      isPending,
      isError
    } = useCheckPremium()

    if (isPending) {
        return <div>Loading....</div>
    }

    if (isError) {
        return <div>Error loading Videos</div>
    }
    
    if (!isPremium) {
      return (
        <div>
          Upgrade to premium to watch this video
          <Button
            onClick={() => {
              alert("Upgrade to premium")
            }}
            className='w-full mt-4'
          >
            Upgrade
          </Button>
        </div>
      )
    }
    
    return (
      <iframe 
        src="https://iframe.mediadelivery.net/embed/292578/1ec1e16c-4d60-426e-a8e0-af74c92aff1f?autoplay=true&loop=false&muted=false&preload=true&responsive=true" 
        loading="lazy"
        style={{
          border: 0,
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
        }}
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
        allowFullScreen={true}
      >
      </iframe>
    )
}
