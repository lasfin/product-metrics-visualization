import React, { Component } from 'react';

class EventsTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="indent">
                <table className="eventsTable">
                    <tr>
                        <th>Product</th>
                        <th>Event</th>
                        <th>10.04</th>
                        <th>11.04</th>
                        <th>12.04</th>
                        <th>13.04</th>
                        <th>14.04</th>
                        <th>15.04</th>
                        <th>16.04</th>
                        <th>17.04</th>
                        <th>18.04</th>
                        <th>19.04</th>
                    </tr>
                    <tr>
                        <td>Seoideas</td>
                        <td>Some event</td>
                        <td>100</td>
                        <td>123</td>
                        <td>124</td>
                        <td>99</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Seoideas</td>
                        <td>Another event</td>
                        <td>100</td>
                        <td>123</td>
                        <td>124</td>
                        <td>1000</td>
                        <td>1</td>
                        <td>15</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Seoideas</td>
                        <td>Event #3</td>
                        <td>100</td>
                        <td>123</td>
                        <td>124</td>
                        <td>1000</td>
                        <td>1</td>
                        <td>15</td>
                        <td>15</td>
                        <td>15</td>
                        <td>15</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Seoideas</td>
                        <td>Event #4</td>
                        <td>100</td>
                        <td>123</td>
                        <td>124</td>
                        <td>1000</td>
                        <td>1</td>
                        <td>15</td>
                        <td>15</td>
                        <td>15</td>
                        <td>15</td>
                        <td>50</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default EventsTable;