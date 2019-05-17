import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'


export default function MedicalSuppliesDistributionProcess() {
  return (
    <div>
            <h1>Medical Supplies Distribution Proess</h1>

            <p>The distribution process is triggered by a requisition. Individual requisitions can be received from
                                                    service delivery locations when a “pull” system has been implemented or in the case of a “push” system
                                                    can be regularly scheduled based on a previously completed distribution plan or standing orders.
                                                    Allocation of stock for a requisition can depend on stock status within the store, competing needs of
                                                    other service delivery, consumption patterns, or budgetary status. Refer Figure 5.</p>

{/*                                                 <img src="assets/images/figure_5.png">
 */}
                                                <h3>Procedures for Medical Supplies Distribution Process</h3>

                                                <p>
                                                  

                                                    In order to identify and prepare and deliver accurate quantities of medical supplies packed
                                                    correctly from store needed at the pharmacy or any service delivery point the following
                                                    procedures
                                                    <br></br>

                                                    <ListGroup>
  <ListGroup.Item>P1. Stock level check. Pharmacist/technician at the dispensing point perform a stock level checks
</ListGroup.Item>
  <ListGroup.Item>P2. Examine needs. Determine medical supplies needed at the dispensing point by calculating required quantities based previous consumptions, Health facility guidelines and rules in consideration of minimum and maximum medical supplies stock level at the dispensing point.
</ListGroup.Item>
  <ListGroup.Item>P3. Request medical supply. Issue requisition of medical supplies from the sub store.
</ListGroup.Item>
  <ListGroup.Item>P4. Receive and examine request. The pharmacist at the sub store receives and examines the request of medical supplies from the dispensing point.
</ListGroup.Item>
  <ListGroup.Item>P5. Stock level check. Pharmacist/technician at the sub store performs a stock level check to determine the availability of the requested medicines. The stock level check is also performed regularly to determine the general need of the sub store.
</ListGroup.Item>
  <ListGroup.Item>P6. Transfer medical supplies. If the stock is available, the pharmacist at the sub store transfers medical supplies to the dispensing point.
</ListGroup.Item>
  <ListGroup.Item>P7. Examine need. If the stock is equal to minimum, the pharmacist at the sub store examines the need for requisition from the main store.
</ListGroup.Item>
  <ListGroup.Item>P8. Request medical supplies. The pharmacist issues requisition of medical supplies from main store based on the established need.
</ListGroup.Item>
  <ListGroup.Item>P9. Receive and examine request. The pharmacist at the main store receives and examines the request of medical supplies from the sub store.
</ListGroup.Item>
  <ListGroup.Item>P10. Stock level check. Pharmacist/technician at the main store performs a stock level check to determine the availability of the requested medicines. The stock level check is also performed regularly to determine the general need of the main store.
</ListGroup.Item>
  <ListGroup.Item>P11. Transfer medical supplies. If the stock is available, the pharmacist at the main store will transfer medical supplies to the sub store.</ListGroup.Item>
</ListGroup>

</p>

<br></br>
    </div>
  )
}
