import { Button } from '@/components/ui/button'
import { useCreateOrder } from '@/lib/hooks/users/use-create-order'
import { useVerifyPayment } from '@/lib/hooks/users/use-verify-order';
import React from 'react'

function Upgrade() {
    const createOrderMutation = useCreateOrder();
    const verifyOrderMutation = useVerifyPayment();

    const onPayment = async() => {
        let orderData;

        createOrderMutation.mutate({
            planId : "premium"
        }, {
            onSuccess : async(data) => {
                const paymentObject = new (window as any).Razorpay({
                    key : process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                    order_id : data.data.id,
                    ...data.data,
                    handler : async function (response:any) {
                        orderData = response
                    }
                })
                await paymentObject.open()
            }
        })
    }

  return (
   <Button
   onClick = {() => {
    alert("Upgrade to Premium")
   }}
   className='w-full mt-4'
   >
       Upgrade 
   </Button>
  )
}

export default Upgrade