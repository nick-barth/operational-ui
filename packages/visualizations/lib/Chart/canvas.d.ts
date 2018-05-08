import { Canvas, D3Selection, EventBus, State, StateWriter } from "./typings";
declare class ChartCanvas implements Canvas {
    private chartContainer;
    private drawingContainer;
    private el;
    private elements;
    private elMap;
    private events;
    private state;
    private stateWriter;
    constructor(state: State, stateWriter: StateWriter, events: EventBus, context: Element);
    private insertChartContainer(context);
    private onMouseEnter();
    private onMouseLeave();
    private onClick();
    private insertLegends();
    private insertLegendBefore(options);
    private insertLegendAfter(options);
    private legendHeight(position, float);
    private totalLegendHeight();
    private insertDrawingContainer();
    private insertEl();
    private insertDrawingGroup();
    private insertAxes();
    private insertRules();
    private insertSeriesDrawingGroups();
    private insertClipPaths();
    private insertDrawingClip();
    private insertYRulesClip();
    private insertXYRulesClip();
    private prefixedId(id);
    private margin(axis);
    private calculateDimensions();
    private calculateDrawingContainerDims();
    private calculateDrawingDims();
    draw(): void;
    remove(): void;
    elementFor(component: string): D3Selection;
}
export default ChartCanvas;
