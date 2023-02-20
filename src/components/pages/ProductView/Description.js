import React from 'react'
import './description.css'
import { Products } from '../../products/Products'

export const Description = () => {
  return (
    <div className='description'>
        <p className='desc-header'>What is iBusiness?</p>
        <p className='desc-text'>Accelerate your organizational digital transformation by embracing highly efficient and simplified business processes anytime, anywhere. Whether you are involved in supply chain or sales order management, you need an ingenious Software that will empower you to boost your profits at the lowest cost while maintaining transactional integrity and security in a highly collaborative business workspace. iBusiness empowers you to do exactly that so that you can stay ahead of competition.</p>
        <div className="features">
            <div className='feature-left'>
                <p className='feature-header'>Cloud Transactions Processing</p>
                <p className='feature-text'>Streamline all your transaction processing within a secure and trusted cloud based software for a seamless flow of information across departments to simplify decision making in real time. This integrated software will automate all inventory management, procure to pay and order to cash processes in a seamless flow that is powered by quick transactions processing interfaces, inquiries and intelligent reporting and analysis.</p>
            </div>
            <div className='feature-right'>
                <p className='feature-header'>Secure-Powered By Microsoft Azure</p>
                <p className='feature-text'>The cloud powered software offers guaranteed enterprise grade security. It employs robust security measures to ensure that your business critical information is always secure and private. A few of the security measures deployed include multi-layer firewalls, multi-factor authentication, data encryption and advanced disaster recovery mechanisms.</p>
            </div>
        </div>
        <Products />
    </div>
  )
}
