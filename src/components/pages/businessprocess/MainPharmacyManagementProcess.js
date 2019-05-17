
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'


export default function MainPharmacyManagementProcess() {
  return (
    <div>
      <h1>Main Pharmacy Management Process</h1>
      <p>The central pharmacy management process activities include requisition, purchasing, receiving, checking and storing of medical supplies. Refer to Figure 4.
</p>

      {/*                                                 <img src="assets/images/figure_4.png">
 */}
      <h3>Procedures for Central Inventiry Management Process</h3>
      <p>
        To ensure the availability of the right medication at the right time, the right dosage, at the minimum
       possible cost in a proper manner the following procedures should be followed.
<br></br>
        <ListGroup>
          <ListGroup.Item>P1. Stock level check. The pharmacist performs regular stock level check to determine whether medical supplies are to be ordered.
</ListGroup.Item>
          <ListGroup.Item>P2. Forecasting. The user departments perform forecasting to aid the requisition/procurement process for ordering adequate stock and securing appropriate cold chain capacity throughout the health system. Forecasting can occur at multiple levels and use different methods of estimation. The most common estimation methods include target population estimation, previous consumption estimation, and estimation based on size of planned care service sessions.
</ListGroup.Item>
          <ListGroup.Item>P3. Budget reconciliation. Provides the mechanism for calculating and ordering goods for stores at intermediate and service delivery points. The process may be performed with a push or pull system. Different rules and guidelines for estimating the need for stock are used to create the requisition. Transmitted requisitions are submitted to the appropriate store and then go through a validation and approval process.
</ListGroup.Item>
          <ListGroup.Item>P4. Issue requisition. The pharmacist issue requisition based on the estimated need and the available budget
</ListGroup.Item>
          <ListGroup.Item>P5. Receive and verify supply request. MSD receive and verify the request for processing/
</ListGroup.Item>
          <ListGroup.Item>P6. Provide profoma invoice and list of missing requested supplies. The supplier checks the requested supplies against the available stock. The profoma invoice is provided for the available supplies along with any missing supplies.
</ListGroup.Item>
          <ListGroup.Item>P7. Receive profoma invoice and list of missing supplies. The pharmacist receives profoma invoice with quantity and price respectively of available requested supplies, and the list of missed items.
</ListGroup.Item>
          <ListGroup.Item>P8. Procurement of missing supplies. The User in collaboration with procurement unit completes the procurement of missing supplies from external suppliers.
</ListGroup.Item>
          <ListGroup.Item>P9. Receive and verify medical and other supplies. The pharmacists or inspection team receive and verify medical supplies delivered.
</ListGroup.Item>
          <ListGroup.Item>P10. Damage/ discrepancy. Check the delivered supplies if there any damage or discrepancy.
</ListGroup.Item>
          <ListGroup.Item>P11. Reject the damaged/discrepancy items. The pharmacists/inspection team rejects the damaged items. The documentation is done.
</ListGroup.Item>
          <ListGroup.Item>P12. Supplier collects back the rejected items. The responsibility of supplier to collects the rejected items from Health facility premises.
</ListGroup.Item>
          <ListGroup.Item>P13. Generate the Good Receipt Note. The items received and accepted by the pharmacists/inspection team, GRN should be generated for further procedure.
</ListGroup.Item>
          <ListGroup.Item>P14. Update the updated physical stock. The physical stock should be updated to reflect the received stock in main store.</ListGroup.Item>
        </ListGroup>
      </p>
      <br></br>
    </div>
  )
}
