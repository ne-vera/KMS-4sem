using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LightTrigger : MonoBehaviour
{
    public Light Point;
    public Light Spot;

    void Start() { }

    void Update() { }

    void OnTriggerEnter(Collider col)
    {
        if (col.name == "player")
        {
            Point.enabled = true;
        }
    }
    void OnTriggerExit(Collider col)
    {
        if (col.name == "player")
        {
            Point.enabled = false;
        }
    }
   
}
