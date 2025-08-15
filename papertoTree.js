function calculateTrees() {
            const sheetsPerDay = parseInt(document.getElementById('sheets').value);
            const thicknessRatio = parseInt(document.getElementById('paperType').value);

            if (isNaN(sheetsPerDay) || sheetsPerDay <= 0) {
                alert("Please enter a valid number of sheets.");
                return;
            }

            // Approximate number of sheets from one tree for A4 paper
            const sheetsPerTreeA4 = 10000;

            // Adjust sheets per tree based on thickness ratio (thicker paper means fewer sheets per tree)
            // thicknessRatio is how many times thicker paper is compared to A4
            const sheetsPerTree = sheetsPerTreeA4 / thicknessRatio;

            // Calculate trees used per year based on daily sheets
            const treesPerYear = (sheetsPerDay * 365) / sheetsPerTree;

            // Round result to 2 decimals
            const treesRounded = treesPerYear.toFixed(2);

            // Calculate potential saving if switching to digital (assuming all paper saved)
            const treesSaved = treesRounded;

            // Display result
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <p>You use approximately <strong>${treesRounded}</strong> trees per year based on your daily paper use.</p>
                <p>If you switch to digital notes, you could save around <strong>${treesSaved}</strong> trees annually!</p>
            `;
        }