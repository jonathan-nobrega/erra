import { Component, Input, OnInit } from "@angular/core";
import { Chart } from "chart.js/auto";

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss'],
  standalone: false
})
export class DoughnutComponent implements OnInit {
  public doughnutChart: Chart | undefined;

  @Input() totalCount: number = 8;
  @Input() completedCount: number = 5;

  constructor() { }

  ngOnInit() {
    this.doughnutChart = new Chart('doughnutCanvas', {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [this.totalCount, this.completedCount],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 8
        }]
      },
      options: {
        cutout: "70%",
        maintainAspectRatio: true,
        responsive: true,
      },
      plugins: [{
        id: "centerText",
        beforeDraw: (chart) => {
          const width = chart.width,
            height = chart.height,
            ctx = chart.ctx;

          ctx.restore();
          const fontSize = 1.2
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";

          const text = `${this.completedCount}/${this.totalCount}`,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }]
    });
  }

}
