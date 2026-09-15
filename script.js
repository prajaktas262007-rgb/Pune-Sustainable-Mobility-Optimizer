function recommendRoute() {

    const priority =
        document.getElementById("priority").value;

    let recommendation = "";
    let sustainabilityScore = "";

    if (priority === "Low Emissions") {

        recommendation = `
        <div class="result-card">

            <h2>🤖 AI Recommendation</h2>

            <h3>Recommended Route: Metro + Bus</h3>

            <p>
            This route minimizes carbon emissions while
            maintaining reasonable travel time and cost.
            It is the most sustainable option.
            </p>

            <h3>⭐ Sustainability Score: 95/100</h3>

            <table>
                <tr>
                    <th>Mode</th>
                    <th>Time</th>
                    <th>Cost</th>
                    <th>CO₂</th>
                </tr>

                <tr>
                    <td>Bus</td>
                    <td>70 min</td>
                    <td>₹25</td>
                    <td>0.8 kg</td>
                </tr>

                <tr style="background:#e8f5e9;">
                    <td><b>Metro + Bus</b></td>
                    <td><b>65 min</b></td>
                    <td><b>₹35</b></td>
                    <td><b>0.6 kg</b></td>
                </tr>

                <tr>
                    <td>Bike</td>
                    <td>45 min</td>
                    <td>₹70</td>
                    <td>1.6 kg</td>
                </tr>
            </table>

            <br>

            <h3>🌍 Environmental Impact</h3>

            <p>✅ CO₂ Saved Per Trip: 1.0 kg</p>
            <p>✅ Estimated Monthly Saving: 30 kg CO₂</p>
            <p>✅ Supports SDG 11 & SDG 13</p>

        </div>
        `;
    }

    else if (priority === "Fastest") {

        recommendation = `
        <div class="result-card">

            <h2>🤖 AI Recommendation</h2>

            <h3>Recommended Route: Private Bike</h3>

            <p>
            This route provides the shortest travel time,
            but generates higher emissions.
            </p>

            <h3>⭐ Sustainability Score: 45/100</h3>

            <table>
                <tr>
                    <th>Mode</th>
                    <th>Time</th>
                    <th>Cost</th>
                    <th>CO₂</th>
                </tr>

                <tr>
                    <td>Bus</td>
                    <td>70 min</td>
                    <td>₹25</td>
                    <td>0.8 kg</td>
                </tr>

                <tr>
                    <td>Metro + Bus</td>
                    <td>65 min</td>
                    <td>₹35</td>
                    <td>0.6 kg</td>
                </tr>

                <tr style="background:#fff3e0;">
                    <td><b>Bike</b></td>
                    <td><b>45 min</b></td>
                    <td><b>₹70</b></td>
                    <td><b>1.6 kg</b></td>
                </tr>
            </table>

            <br>

            <h3>⚠ Trade-off Analysis</h3>

            <p>✓ Fastest option</p>
            <p>✗ Highest emissions</p>
            <p>✗ Highest travel cost</p>

        </div>
        `;
    }

    else {

        recommendation = `
        <div class="result-card">

            <h2>🤖 AI Recommendation</h2>

            <h3>Recommended Route: Bus</h3>

            <p>
            This route offers the lowest travel cost
            while maintaining moderate emissions.
            </p>

            <h3>⭐ Sustainability Score: 75/100</h3>

            <table>
                <tr>
                    <th>Mode</th>
                    <th>Time</th>
                    <th>Cost</th>
                    <th>CO₂</th>
                </tr>

                <tr style="background:#e3f2fd;">
                    <td><b>Bus</b></td>
                    <td><b>70 min</b></td>
                    <td><b>₹25</b></td>
                    <td><b>0.8 kg</b></td>
                </tr>

                <tr>
                    <td>Metro + Bus</td>
                    <td>65 min</td>
                    <td>₹35</td>
                    <td>0.6 kg</td>
                </tr>

                <tr>
                    <td>Bike</td>
                    <td>45 min</td>
                    <td>₹70</td>
                    <td>1.6 kg</td>
                </tr>
            </table>

            <br>

            <h3>💰 Cost Advantage</h3>

            <p>✓ Lowest travel expense</p>
            <p>✓ Affordable for daily commuters</p>
            <p>✓ Moderate environmental impact</p>

        </div>
        `;
    }

    document.getElementById("result").innerHTML =
        recommendation;
}